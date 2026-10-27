import Button from "../components/Button";
import Cdn from "../components/Cdn";
import Dropdown from "../components/Dropdown";
import Install from "../components/Install";
import Dashboard from "../components/Dashboard";
import Chart from "../components/Chart";
import Components from "../pages/Components";
import Docs from "../pages/Docs";
import Templates from "../pages/Templates";

const routes = [
    {
        title: "Docs",
        path: "/docs",
        elemnet: <Docs />,
        element: <Docs />,
        children: [
            {
                title: "Install",
                path: "install",
                element: <Install />
            },
            {
                title: "Cdn",
                path: "cdn",
                element: <Cdn />
            }
        ]
    },
    {
        title: "Components",
        path: "/components",
        elemnet: <Components />,
        element: <Components />,
        children: [
            {
                title: "Button",
                path: "button",
                element: <Button />
            },
            {
                title: "Dropdown",
                path: "dropdown",
                element: <Dropdown />
            }
        ]
    },
    {
        title: "Templates",
        path: "/templates",
        elemnet: <Templates />,
        element: <Templates />,
        children: [
            {
                title: "Dashboard",
                path: "dashboard",
                element: <Dashboard />
            },
            {
                title: "Chart",
                path: "chart",
                element: <Chart />
            }
        ]
    }
];

export default routes;