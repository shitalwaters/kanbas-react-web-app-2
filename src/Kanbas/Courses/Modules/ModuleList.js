import React from "react";
import { useParams } from "react-router-dom";
import Database from "../../Database";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faPlus, faEllipsisV, faTimes } from '@fortawesome/free-solid-svg-icons';
import "./moduleList.css";

function ModuleList() {
    const { courseId } = useParams();
    const modules = Database.modules;

    return (
        <ul className="module-group">
            {modules
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                    <li key={index} className="module-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h3>{module.name}</h3>
                            <p>{module.description}</p>
                        </div>
                        <div>
                        <FontAwesomeIcon className="fa-icon" icon={faCheckCircle} style={{ color: 'green' }} aria-hidden="true" />
                        <FontAwesomeIcon className="fa-icon" icon={faPlus} aria-hidden="true" />
                        <FontAwesomeIcon className="fa-icon" icon={faEllipsisV} aria-hidden="true" />

                        </div>
                    </li>
                ))
            }
        </ul>
    );
}

export default ModuleList;
