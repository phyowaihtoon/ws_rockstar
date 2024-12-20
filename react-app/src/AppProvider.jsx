import { createContext, useContext, useMemo, useState } from "react";
import App from "./App.jsx";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import AppRouter from "./AppRouter.jsx";
import {QueryClientProvider,QueryClient} from "react-query";

const AppContext = createContext();
const queryClient = new QueryClient();

export function useApp() {
  return useContext(AppContext);
}

export default function AppProvider() {
  const [showForm, setShowForm] = useState(false);
  const [mode, setMode] = useState("dark");
  const [showDrawer,setShowDrawer]=useState(false);
  const [auth,setAuth]=useState(false);

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: mode,
      },
    });
  }, [mode]);

  return (
    <QueryClientProvider client={queryClient}>
    <AppContext.Provider value={{ showForm, setShowForm, mode, setMode,showDrawer,setShowDrawer,auth,setAuth }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
       <AppRouter/>
      </ThemeProvider>
    </AppContext.Provider>
    </QueryClientProvider>
  );
}
