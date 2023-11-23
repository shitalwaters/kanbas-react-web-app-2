import { Link, useLocation } from "react-router-dom";
import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faChartPie, faBook, faCalendarAlt, faInbox, faClock, faPlay, faArrowCircleRight, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

function KanbasNavigation() {
    const links = [
        { name: "Account", icon: faUserCircle },
        { name: "Dashboard", icon: faChartPie },
        { name: "Courses", icon: faBook },
        { name: "Calendar", icon: faCalendarAlt },
        { name: "Inbox", icon: faInbox },
        { name: "History", icon: faClock },
        { name: "Studio", icon: faPlay },
        { name: "Commons", icon: faArrowCircleRight },
        { name: "Help", icon: faQuestionCircle }

    ];
    const { pathname } = useLocation();

    return (
        <div className="list-group" style={{ width: 150 }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link.name}`}
                    className={`list-group-item ${pathname === `/Kanbas/${link.name}` ? "active" : ""}`}
>
                    <FontAwesomeIcon icon={link.icon} className="link-icon" />
                    {link.name}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;
