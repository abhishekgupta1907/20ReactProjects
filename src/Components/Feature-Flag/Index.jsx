import { useContext } from "react";
import Accordian from "../Accordian";
import RandomColor from "../RandomColor";
import TicTacToe from "../Tic-Tac-Toe-Game";
import TreeView from "../Tree-View";
import { FeatureFlagsContext } from "./Context";
import menus from "../Tree-view/Data";
import TabTest from "../Custom-Tabs/Tab-Test";
import LightDarkMode from "../Light-Dark-Mode-Theme/Index";

export default function FeatureFlags() {
    const { loading, enabledFlags } = useContext(FeatureFlagsContext);

    const componentsToRender = [
        {
            key: "showLightAndDarkMode",
            component: <LightDarkMode />,
        },
        {
            key: "showTicTacToeBoard",
            component: <TicTacToe />,
        },
        {
            key: "showRandomColorGenerator",
            component: <RandomColor />,
        },
        {
            key: "showAccordian",
            component: <Accordian />,
        },
        {
            key: "showTreeView",
            component: <TreeView menus={menus} />,
        },
        {
            key: "showTabs",
            component: <TabTest />,
        },
    ];

    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags[getCurrentKey];
    }

    if (loading) return <h1>Loading data ! Please wait</h1>;

    return (
        <div>
            <h1>Feature Flags</h1>
            {componentsToRender.map((componentItem) =>
                checkEnabledFlags(componentItem.key)
                    ? componentItem.component
                    : null
            )}
        </div>
    );
}
