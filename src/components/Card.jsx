// Añadir al inicio del archivo
import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios"; // Importar axios
import "../Styles/Card.css";

export const Card = ({ imageName, title }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [subFolderContent, setSubFolderContent] = useState(null);
  const [nestedFolder, setNestedFolder] = useState(null);
  const [nestedFolderContent, setNestedFolderContent] = useState(null);
  const [deepNestedFolder, setDeepNestedFolder] = useState(null);
  const [deepNestedFolderContent, setDeepNestedFolderContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Nuevo estado para la carga
  const [currentPath, setCurrentPath] = useState(""); // Para mantener el path actual de navegación

  const imagePath = (imageName) => {
    return `src/images/${imageName}`;
  };

  // Función para obtener la ruta base y descripción según el título
  const getModalContent = (title) => {
    switch (title) {
      case "Imagenes Master":
        return {
          description: "Imágenes de sistemas operativos para masterización",
          path: "02__Imagenes_Master/",
        };
      case "Drivers":
        return {
          description: "Controladores para diferentes dispositivos",
          path: "04__Drivers/",
        };
      case "Pendrive Masterizado":
        return {
          description: "Herramientas para crear pendrives de arranque",
          path: "01__Pendrive_para_masterizado_y_testeos/",
        };
      case "Software":
        return {
          description: "Software esencial para equipos",
          path: "03__Software/",
        };
      case "Reparación de Errores":
        return {
          description: "Herramientas para solucionar problemas comunes",
          path: "08__Reparación_de_errores/",
        };
      case "Utilidades":
        return {
          description: "Utilidades para mantenimiento y soporte",
          path: "07__Utilidades_Soporte/",
        };
      default:
        return {
          description: "Información no disponible",
          path: "",
        };
    }
  };

  const modalContent = getModalContent(title);

  // Nueva función para obtener el contenido de la carpeta desde el servidor
  const fetchFolderContent = async (path) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/pyp/${path}`, {
        headers: {
          'Accept': 'text/html',
          'Content-Type': 'text/html'
        }
      });

      const parser = new DOMParser();
      const doc = parser.parseFromString(response.data, "text/html");
      const links = Array.from(doc.querySelectorAll("a"));

      const content = links
        .filter((link) => link.textContent !== "Parent Directory")
        .map((link) => {
          const name = link.textContent.replace(/\/$/, "");
          const isDirectory = link.textContent.endsWith("/");
          const href = link.getAttribute("href");
          return {
            name: name,
            path: path + href,
            isDirectory: isDirectory,
            file: isDirectory ? null : href,
          };
        });

      return content;
    } catch (error) {
      console.error("Error fetching folder content:", error);
      return [];
    } finally {
      setIsLoading(false);
    }
};

  // Función para manejar la apertura del modal y la carga inicial
  const handleOpenModal = async () => {
    setShowModal(true);
    setCurrentPath(modalContent.path);
    const initialContent = await fetchFolderContent(modalContent.path);
    setSubFolderContent(initialContent);
    setSelectedFolder({ name: title, path: modalContent.path }); // Establecer la carpeta inicial como seleccionada
  };

  const handleFolderClick = async (item) => {
 if (item.isDirectory || item.name.endsWith(".wim")) {
      setSelectedFolder(item);
      setCurrentPath(item.path);
      const content = await fetchFolderContent(item.path);
      setSubFolderContent(content);
      setNestedFolder(null);
      setNestedFolderContent(null);
      setDeepNestedFolder(null);
      setDeepNestedFolderContent(null);
    } else {
      // Si es un archivo, abrirlo directamente
      window.open(`http://5.0.32.75/pyp/${item.path}`, "_blank");
    }
  };

  const handleSubFolderClick = async (subFolder) => {
    if (subFolder.isDirectory) {
      setNestedFolder(subFolder);
      setCurrentPath(subFolder.path);
      const content = await fetchFolderContent(subFolder.path);
      setNestedFolderContent(content);
      setDeepNestedFolder(null);
      setDeepNestedFolderContent(null);
    } else {
      window.open(`http://5.0.32.75/pyp/${subFolder.path}`, "_blank");
    }
  };

  const handleDeepNestedFolderClick = async (folder) => {
    if (folder.isDirectory) {
      setDeepNestedFolder(folder);
      setCurrentPath(folder.path);
      const content = await fetchFolderContent(folder.path);
      setDeepNestedFolderContent(content);
    } else {
      window.open(`http://5.0.32.75/pyp/${folder.path}`, "_blank");
    }
  };

  const handleBackClick = async () => {
    if (deepNestedFolder) {
      const parentPath = deepNestedFolder.path.substring(
        0,
        deepNestedFolder.path.lastIndexOf(
          "/",
          deepNestedFolder.path.length - 2
        ) + 1
      );
      setDeepNestedFolder(null);
      setDeepNestedFolderContent(null);
      setCurrentPath(parentPath);
      const content = await fetchFolderContent(parentPath);
      // Necesitamos determinar a qué nivel volver para establecer el estado correcto
      // Esto es un poco más complejo y podría requerir un stack de rutas visitadas
      // Por ahora, asumimos que volvemos al nivel anterior de nestedFolder o selectedFolder
      if (nestedFolder) {
        setNestedFolderContent(content);
      } else if (selectedFolder) {
        setSubFolderContent(content);
      }
    } else if (nestedFolder) {
      const parentPath = nestedFolder.path.substring(
        0,
        nestedFolder.path.lastIndexOf("/", nestedFolder.path.length - 2) + 1
      );
      setNestedFolder(null);
      setNestedFolderContent(null);
      setCurrentPath(parentPath);
      const content = await fetchFolderContent(parentPath);
      if (selectedFolder) {
        setSubFolderContent(content);
      }
    } else if (selectedFolder) {
      setSelectedFolder(null);
      setSubFolderContent(null);
      setCurrentPath(modalContent.path);
    }
  };

  return (
    <>
      <div className="card">
        <img
          src={imagePath(imageName)}
          className="card-img-top p-5"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{modalContent.description}</p>
          <button
            className="btn btn-primary"
            onClick={handleOpenModal} // Cambiado para usar la nueva función
          >
            Ver Contenido
          </button>
        </div>
      </div>

      {/* Modal */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
        tabIndex="-1"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {deepNestedFolder
                  ? `${title} - ${deepNestedFolder.name}`
                  : nestedFolder
                  ? `${title} - ${nestedFolder.name}`
                  : selectedFolder
                  ? `${title} - ${selectedFolder.name}`
                  : title}
              </h5>
              {/* Agregar esta línea para mostrar la ruta actual */}
              <div className="current-path">Ruta actual: {currentPath}</div>
              <button
                type="button"
                className="btn-close"
                onClick={() => {
                  setShowModal(false);
                  setSelectedFolder(null);
                  setSubFolderContent(null);
                  setNestedFolder(null);
                  setNestedFolderContent(null);
                  setDeepNestedFolder(null);
                  setDeepNestedFolderContent(null);
                  setCurrentPath("");
                }}
              ></button>
            </div>
            <div className="modal-body">
              <h6>Descripción:</h6>
              <p>{modalContent.description}</p>

              {(selectedFolder || nestedFolder || deepNestedFolder) && (
                <button
                  className="btn btn-secondary mb-3"
                  onClick={handleBackClick}
                >
                  <i className="bi bi-arrow-left me-1"></i>
                  Volver
                </button>
              )}

              <h6>
                {deepNestedFolder
                  ? `Contenido de ${deepNestedFolder.name}:`
                  : nestedFolder
                  ? `Contenido de ${nestedFolder.name}:`
                  : selectedFolder
                  ? `Contenido de ${selectedFolder.name}:`
                  : "Carpetas disponibles:"}
              </h6>
              <div className="list-group mb-3">
                {isLoading ? (
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Cargando...</span>
                    </div>
                  </div>
                ) : (
                  // Renderizado dinámico del contenido
                  (
                    deepNestedFolderContent ||
                    nestedFolderContent ||
                    subFolderContent
                  )?.map((item, index) => (
                    <div
                      key={index}
                      className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                      <span>{item.name}</span>
                      {item.isDirectory ? (
                        <a
                          href="#"
                          className="btn btn-sm btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            if (deepNestedFolder) {
                              handleDeepNestedFolderClick(item);
                            } else if (nestedFolder) {
                              handleDeepNestedFolderClick(item);
                            } else if (selectedFolder) {
                              handleSubFolderClick(item);
                            } else {
                              handleFolderClick(item);
                            }
                          }}
                        >
                          <i className="bi bi-folder me-1"></i>
                          EXPLORAR
                        </a>
                      ) : (
                        <a
                          href={`/pyp/${item.path}`}
                          className="btn btn-sm btn-success"
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                        >
                          <i className="bi bi-download me-1"></i>
                          DESCARGAR
                        </a>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setShowModal(false);
                  setSelectedFolder(null);
                  setSubFolderContent(null);
                  setNestedFolder(null);
                  setNestedFolderContent(null);
                  setDeepNestedFolder(null);
                  setDeepNestedFolderContent(null);
                  setCurrentPath("");
                }}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  imageName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
