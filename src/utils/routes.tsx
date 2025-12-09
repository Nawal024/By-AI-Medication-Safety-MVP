import { createBrowserRouter } from "react-router";
import { Layout } from "../components/Layout";
import { Welcome } from "../components/Welcome";
import { ScanMethod } from "../components/ScanMethod";
import { Camera } from "../components/Camera";
import { Processing } from "../components/Processing";
import { Results } from "../components/Results";
import { MyMedications } from "../components/MyMedications";
import { Alerts } from "../components/Alerts";
import { Settings } from "../components/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Welcome },
      { path: "scan-method", Component: ScanMethod },
      { path: "camera", Component: Camera },
      { path: "processing", Component: Processing },
      { path: "results", Component: Results },
      { path: "medications", Component: MyMedications },
      { path: "alerts", Component: Alerts },
      { path: "settings", Component: Settings },
    ],
  },
]);
