import PropTypes from "prop-types";
import { useState } from "react";
import "../Styles/Card.css";

export const Card = ({ imageName, title }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [subFolderContent, setSubFolderContent] = useState(null);
  const [nestedFolder, setNestedFolder] = useState(null);
  const [nestedFolderContent, setNestedFolderContent] = useState(null);

  const imagePath = (imageName) => {
    return `src/images/${imageName}`;
  };

  // Función para obtener el contenido específico según el título
  const getModalContent = (title) => {
    switch (title) {
      case "Imagenes Master":
        return {
          description: "Imágenes de sistemas operativos para masterización",
          items: [
            {
              name: "Bangho",
              file: "Bangho/",
              subFolders: [
                {
                  name: "AIO",
                  path: "Bangho/AIO/",
                  files: [
                    {
                      name: "Install Bangho AIO Con Sysprep",
                      file: "install-BanghoAioConSysprep.wim",
                    },
                  ],
                },
                { name: "Notebooks", path: "Bangho/Notebooks/" },
                { name: "Optimas y Cross", path: "Bangho/Optimas y Cross/" },
                {
                  name: "Ziva",
                  path: "Bangho/Ziva/",
                  subFolders: [
                    {
                      name: "Ziva Win7 x64 (Recomendada)",
                      path: "Bangho/Ziva/Ziva_Win7x64_(Recomendada)/",
                      files: [
                        {
                          name: "Ziva Win7 x64 Genérica (Nov 2022)",
                          file: "Ziva-Win7x64-Generica-Ver1-3-Noviembre2022.wim",
                        },
                      ],
                    },
                    {
                      name: "Ziva Win7 x86 Genérica y Sarmiento",
                      path: "Bangho/Ziva/Ziva_Win7x86_Generica_y_Sarmiento/",
                      files: [
                        {
                          name: "Ziva Win7 x86 Genérica (Sep 2021)",
                          file: "Ziva-Win7x86-Generica-Version1-2-Septiembre2021.wim",
                        },
                      ],
                    },
                    {
                      name: "Versiones anteriores",
                      path: "Bangho/Ziva/__Versiones_anteriores/",
                      files: [
                        {
                          name: "Ziva Win7 x64 Genérica (Feb 2021)",
                          file: "	Ziva-Generica4-Win7x64-Febero2021.wim",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            { name: "Dell", file: "Dell/" },
            { name: "HP", file: "HP/" },
            { name: "Lenovo", file: "Lenovo/" },
            { name: "EXO", file: "EXO/" },
            { name: "Sansei", file: "Sansei/" },
            { name: "Windows", file: "Windows/" },
            { name: "Máquinas Virtuales", file: "__MaquinasVirtuales/" },
          ],
          path: "02__Imagenes_Master/",
        };
      case "Drivers":
        return {
          description: "Controladores para diferentes dispositivos",
          items: [
            { name: "Impresoras", file: "Impresoras/" },
            { name: "Scanners", file: "Scanners/" },
            { name: "Tarjetas de red", file: "Network/" },
            { name: "Tarjetas de video", file: "Video/" },
          ],
          path: "04__Drivers/",
        };
      case "Pendrive Masterizado":
        return {
          description: "Herramientas para crear pendrives de arranque",
          items: [
            { name: "Rufus", file: "Rufus/" },
            { name: "Ventoy", file: "Ventoy/" },
            { name: "Windows USB/DVD Tools", file: "Windows_USB_Tools/" },
            { name: "Instrucciones", file: "Instrucciones/" },
          ],
          path: "01__Pendrive_para_masterizado_y_testeos/",
        };
      case "Software":
        return {
          description: "Software esencial para equipos",
          items: [
            { name: "Navegadores", file: "Navegadores/" },
            { name: "Compresores", file: "Compresores/" },
            { name: "Antivirus", file: "Antivirus/" },
            { name: "Herramientas de productividad", file: "Productividad/" },
          ],
          path: "03__Software/",
        };
      case "Reparación de Errores":
        return {
          description: "Herramientas para solucionar problemas comunes",
          items: [
            { name: "Reparación de Windows", file: "Windows/" },
            { name: "Recuperación de datos", file: "Recuperacion/" },
            { name: "Solución de problemas de arranque", file: "Boot/" },
            { name: "Herramientas de diagnóstico", file: "Diagnostico/" },
          ],
          path: "08__Reparación_de_errores/",
        };
      case "Utilidades":
        return {
          description: "Utilidades para mantenimiento y soporte",
          items: [
            { name: "Herramientas de limpieza", file: "Limpieza/" },
            { name: "Monitoreo de sistema", file: "Monitoreo/" },
            { name: "Optimización de rendimiento", file: "Optimizacion/" },
            { name: "Herramientas de red", file: "Red/" },
          ],
          path: "07__Utilidades_Soporte/",
        };
      default:
        return {
          description: "Información no disponible",
          items: [],
          path: "",
        };
    }
  };

  const modalContent = getModalContent(title);

  const handleFolderClick = (item) => {
    if (item.subFolders) {
      setSelectedFolder(item);
      setSubFolderContent(item.subFolders);
      setNestedFolder(null);
      setNestedFolderContent(null);
    } else {
      window.open(
        `http://5.0.32.75/pyp/${modalContent.path}${item.file}`,
        "_blank"
      );
    }
  };

  const handleSubFolderClick = (subFolder) => {
    if (subFolder.subFolders) {
      setNestedFolder(subFolder);
      setNestedFolderContent(subFolder.subFolders);
    } else {
      window.open(
        `http://5.0.32.75/pyp/${modalContent.path}${subFolder.path}`,
        "_blank"
      );
    }
  };

  const handleBackClick = () => {
    if (nestedFolder) {
      setNestedFolder(null);
      setNestedFolderContent(null);
    } else {
      setSelectedFolder(null);
      setSubFolderContent(null);
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
            onClick={() => setShowModal(true)}
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
                {selectedFolder ? `${title} - ${selectedFolder.name}` : title}
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => {
                  setShowModal(false);
                  setSelectedFolder(null);
                  setSubFolderContent(null);
                }}
              ></button>
            </div>
            <div className="modal-body">
              <h6>Descripción:</h6>
              <p>{modalContent.description}</p>

              {(selectedFolder || nestedFolder) && (
                <button
                  className="btn btn-secondary mb-3"
                  onClick={handleBackClick}
                >
                  <i className="bi bi-arrow-left me-1"></i>
                  Volver
                </button>
              )}

              <h6>
                {nestedFolder
                  ? `Contenido de ${nestedFolder.name}:`
                  : selectedFolder
                  ? `Contenido de ${selectedFolder.name}:`
                  : "Carpetas disponibles:"}
              </h6>
              <div className="list-group mb-3">
                {nestedFolder && nestedFolderContent
                  ? // Mostrar contenido de la subcarpeta anidada (nivel 3)
                    nestedFolderContent.map((item, index) => (
                      <div
                        key={index}
                        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                      >
                        <span>{item.name}</span>
                        {item.files ? (
                          <div>
                            <button
                              className="btn btn-sm btn-primary me-2"
                              onClick={() =>
                                window.open(
                                  `http://5.0.32.75/pyp/${modalContent.path}${item.path}`,
                                  "_blank"
                                )
                              }
                            >
                              <i className="bi bi-folder me-1"></i>
                              EXPLORAR
                            </button>
                            <a
                              href={`http://5.0.32.75/pyp/${modalContent.path}${item.path}${item.files[0].file}`}
                              className="btn btn-sm btn-success"
                              target="_blank"
                              rel="noopener noreferrer"
                              download
                            >
                              <i className="bi bi-download me-1"></i>
                              DESCARGAR
                            </a>
                          </div>
                        ) : (
                          <a
                            href={`http://5.0.32.75/pyp/${modalContent.path}${item.path}`}
                            className="btn btn-sm btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="bi bi-folder me-1"></i>
                            EXPLORAR
                          </a>
                        )}
                      </div>
                    ))
                  : !selectedFolder
                  ? // Mostrar carpetas principales (nivel 1)
                    modalContent.items.map((item, index) => (
                      <div
                        key={index}
                        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                      >
                        <span>{item.name}</span>
                        <a
                          href="#"
                          className="btn btn-sm btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            handleFolderClick(item);
                          }}
                        >
                          <i className="bi bi-folder me-1"></i>
                          EXPLORAR
                        </a>
                      </div>
                    ))
                  : // Mostrar subcarpetas (nivel 2)
                    subFolderContent.map((subFolder, index) => (
                      <div
                        key={index}
                        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                      >
                        <span>{subFolder.name}</span>
                        {subFolder.subFolders ? (
                          // Si tiene subcarpetas anidadas (como Ziva)
                          <a
                            href="#"
                            className="btn btn-sm btn-primary"
                            onClick={(e) => {
                              e.preventDefault();
                              handleSubFolderClick(subFolder);
                            }}
                          >
                            <i className="bi bi-folder me-1"></i>
                            EXPLORAR
                          </a>
                        ) : subFolder.files ? (
                          // Si tiene archivos directos
                          <div>
                            <button
                              className="btn btn-sm btn-primary me-2"
                              onClick={() =>
                                window.open(
                                  `http://5.0.32.75/pyp/${modalContent.path}${subFolder.path}`,
                                  "_blank"
                                )
                              }
                            >
                              <i className="bi bi-folder me-1"></i>
                              EXPLORAR
                            </button>
                            <a
                              href={`http://5.0.32.75/pyp/${modalContent.path}${subFolder.path}${subFolder.files[0].file}`}
                              className="btn btn-sm btn-success"
                              target="_blank"
                              rel="noopener noreferrer"
                              download
                            >
                              <i className="bi bi-download me-1"></i>
                              DESCARGAR
                            </a>
                          </div>
                        ) : (
                          // Si es solo una carpeta sin archivos específicos
                          <a
                            href={`http://5.0.32.75/pyp/${modalContent.path}${subFolder.path}`}
                            className="btn btn-sm btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="bi bi-folder me-1"></i>
                            EXPLORAR
                          </a>
                        )}
                      </div>
                    ))}
              </div>

              {/* Puedes eliminar estas secciones ya que no se utilizarán más */}
              {/* Mostrar archivos de subcarpetas cuando se seleccionan */}
              {/* {selectedFolder && !nestedFolder && (
                <div>
                  {subFolderContent.map(
                    (subFolder, index) =>
                      subFolder.files && (
                        <div
                          key={`files-container-${index}`}
                          className="collapse mt-3"
                          id={`files-${index}`}
                        >
                          <div className="card card-body">
                            <h6>Archivos en {subFolder.name}:</h6>
                            <div className="d-flex flex-wrap">
                              {subFolder.files.map((file, fileIndex) => (
                                <div
                                  key={fileIndex}
                                  className="m-2"
                                  style={{ width: '300px' }}
                                >
                                  <div className="card shadow-sm h-100">
                                    <div className="card-body d-flex flex-column">
                                      <p className="card-text mb-2 text-truncate" title={file.name}>
                                        {file.name}
                                      </p>
                                      <a
                                        href={`http://5.0.32.75/pyp/${modalContent.path}${subFolder.path}${file.file}`}
                                        className="btn btn-sm btn-dark mt-auto"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download
                                      >
                                        <i className="bi bi-download me-1"></i>
                                        DESCARGAR
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )
                  )}
                </div>
              )} */}

              {/* Mostrar archivos de subcarpetas anidadas cuando se seleccionan */}
              {nestedFolder && (
                <div>
                  {nestedFolderContent.map(
                    (item, index) =>
                      item.files && (
                        <div
                          key={`nested-files-container-${index}`}
                          className="collapse mt-3"
                          id={`nested-files-${index}`}
                        >
                          <div className="card card-body">
                            <h6>Archivos en {item.name}:</h6>
                            <div className="d-flex flex-wrap">
                              {item.files.map((file, fileIndex) => (
                                <div
                                  key={fileIndex}
                                  className="m-2"
                                  style={{ width: "300px" }}
                                >
                                  <div className="card shadow-sm h-100">
                                    <div className="card-body d-flex flex-column">
                                      <p
                                        className="card-text mb-2 text-truncate"
                                        title={file.name}
                                      >
                                        {file.name}
                                      </p>
                                      <a
                                        href={`http://5.0.32.75/pyp/${modalContent.path}${item.path}${file.file}`}
                                        className="btn btn-sm btn-dark mt-auto"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download
                                      >
                                        <i className="bi bi-download me-1"></i>
                                        DESCARGAR
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )
                  )}
                </div>
              )}
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <a
                href={`http://5.0.32.75/pyp/${modalContent.path}${
                  selectedFolder ? selectedFolder.file : ""
                }`}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                VER DIRECTORIO COMPLETO
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setShowModal(false);
                  setSelectedFolder(null);
                  setSubFolderContent(null);
                }}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {showModal && (
        <div
          className="modal-backdrop fade show"
          onClick={() => {
            setShowModal(false);
            setSelectedFolder(null);
            setSubFolderContent(null);
          }}
        ></div>
      )}
    </>
  );
};

Card.propTypes = {
  imageName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
