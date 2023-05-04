import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./contexts/ContextProvider";
import { registerLicense } from "@syncfusion/ej2-base";
registerLicense(
  "MTkyNzIwMUAzMjMxMmUzMjJlMzNvVVpYSVdqWUkrOHRRTXRIZVJ2bVEzd0YyY252aVA4dSs4ZkV0ZzFmQjVNPQ==;Mgo+DSMBaFt+QHJqVk1lQ1BFaV1CX2BZeFl1RWlcfE4QCV5EYF5SRHNfRlxrSn5WdURmX3s=;Mgo+DSMBMAY9C3t2VFhiQlJPc0BDXHxLflF1VWVTfF56cVZWACFaRnZdQV1mSXpSfkZjXHxfd3BR;Mgo+DSMBPh8sVXJ1S0R+X1pBaV5DQmFJfFBmQ2laf1R1d0UmHVdTRHRcQlhjTX9bdUVmWn5XcnA=;MTkyNzIwNUAzMjMxMmUzMjJlMzNBYnlSdUpyZXVHRklOUDFkR3k0dGw3SXYyZUVQbWxnUzZJMnVoQkhzSDlZPQ==;NRAiBiAaIQQuGjN/V0d+Xk9HfVpdXGJWfFN0RnNfdV1wflBFcDwsT3RfQF5jTH5Xd01gWXpdcnBRQg==;ORg4AjUWIQA/Gnt2VFhiQlJPc0BDXHxLflF1VWVTfF56cVZWACFaRnZdQV1mSXpSfkZjXHxcdnVR;MTkyNzIwOEAzMjMxMmUzMjJlMzNOWEMvZnpRQVNWTDZEZ01wZUlpbjVnVmpmN0s0NHVWdTFYdUVLZ05mWWFnPQ==;MTkyNzIwOUAzMjMxMmUzMjJlMzNiLzdSV1plSURFMWp1T0M3aTRMSzRETDhSdnU5YzBtWTQ5dm9QWjU3WlpvPQ==;MTkyNzIxMEAzMjMxMmUzMjJlMzNIR3ZEbzk3UDBtaUtFMXBiUlBPZVRJOVg1dkM0cXR0VVRYRDZHcHpVZmtFPQ==;MTkyNzIxMUAzMjMxMmUzMjJlMzNLZEFzeDBjVE1jdXdsVWFab28rSTFLelFicUNWOVNKa2pIOSsxUUZHTjNrPQ==;MTkyNzIxMkAzMjMxMmUzMjJlMzNvVVpYSVdqWUkrOHRRTXRIZVJ2bVEzd0YyY252aVA4dSs4ZkV0ZzFmQjVNPQ=="
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
