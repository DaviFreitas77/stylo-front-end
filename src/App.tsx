import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from "sonner";
import { AppProvider } from "./context/provider";

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <GoogleOAuthProvider clientId="380579335925-b75ndgjhakmoef864bjlga61notoe0vq.apps.googleusercontent.com">


        <AppProvider>
          <BrowserRouter>
            <AppRoutes />
            <Toaster />
          </BrowserRouter>
        </AppProvider>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
}
