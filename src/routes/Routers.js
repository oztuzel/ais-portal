import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import AftnMessages from "../components/AftnMessages";
import AirportWorkingHours from "../components/AirportWorkingHours";
import CreateFPL from "../components/CreateFPL";
import FlightPlanList from "../components/flight-plan-list/FlightPlanList";
import ForbiddenFlights from "../components/ForbiddenFlights";
import SearchFPL from "../components/SearchFPL";
import SendAFTNmessage from "../components/SendAFTNmessage";
import VFRTrafficMonitoring from "../components/VFRTrafficMonitoring";
import UnparsedAFTNmessages from "../components/UnparsedAFTNmessages";
import AreaPIB from "../components/AreaPIB";
import AerodromePIB from "../components/AerodromePIB";
import SingleNOTAM from "../components/SingleNOTAM";
import Unprocessed from "../components/flight-plan-list/Unprocessed";
import FavoritePlans from "../components/flight-plan-list/FavoritePlans";
import ArrivalOrAlternative from "../components/flight-plan-list/ArrivalOrAlternative";
import Processed from "../components/flight-plan-list/Processed";
import Redirected from "../components/flight-plan-list/Redirected";

function Routers() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={<Navigate replace to="/ais/flightplans/unprocessed" />}
      />
      <Route path="/ais/flightplans/*" element={<FlightPlanList />}>
        <Route path="unprocessed" element={<Unprocessed />} />
        <Route path="processed" element={<Processed />} />
        <Route path="redirected" element={<Redirected />} />
        <Route path="arrivalOrAlternative" element={<ArrivalOrAlternative />} />
        <Route path="favoritePlans" element={<FavoritePlans />} />
      </Route>
      <Route path="/ais/flightplans/search" element={<SearchFPL />} />
      <Route
        path="/ais/flightplans/sendAFTNmessage"
        element={<SendAFTNmessage />}
      />
      <Route path="/ais/flightplans/AFTNmessages" element={<AftnMessages />} />
      <Route path="/ais/flightplans/createFPL" element={<CreateFPL />} />
      <Route
        path="/ais/flightplans/forbiddenFlights"
        element={<ForbiddenFlights />}
      />

      <Route
        path="/ais/:airportId/workingHours"
        element={<AirportWorkingHours />}
      />

      <Route path="/ais/vfr_monitoring" element={<VFRTrafficMonitoring />} />
      <Route
        path="/ais/vfr/unparsedmessages"
        element={<UnparsedAFTNmessages />}
      />

      {/* add Map route in there "/ead/map/onlinenotams"  */}
      <Route path="/ead/pib/area" element={<AreaPIB />} />
      <Route path="/ead/pib/aerodrome" element={<AerodromePIB />} />
      <Route path="/ead/pib/singlenotam" element={<SingleNOTAM />} />
    </Routes>
  );
}

export default Routers;
