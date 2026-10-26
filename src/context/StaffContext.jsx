
import { createContext, useEffect, useState } from "react";
import {
  addcollectionanddocuments,
  fetchstaffdata,
} from "../utils/firebase";

import stafflist from "../stafflist";

export const StaffContext = createContext({ staff: [] });

export function StaffProvider({ children }) {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch staff records from Firestore
  useEffect(() => {
    async function loadStaff() {
      try {
        const records = await fetchstaffdata();
        setStaff(records);
      } catch (err) {
        console.error("Unable to fetch staff data:", err);
        setError("Unable to load staff data from Firestore.");
      } finally {
        setLoading(false);
      }
    }

    loadStaff();
  }, []);

  // Run this function manually when you want to upload
  // the initial staff data to Firestore.
  async function uploadStaff() {
    await addcollectionanddocuments("staff", stafflist);

    const records = await fetchstaffdata();
    setStaff(records);
  }

  const value = {
    staff,
    loading,
    error,
    uploadStaff,
  };

  return (
    <StaffContext.Provider value={value}>
      {children}
    </StaffContext.Provider>
  );
}
