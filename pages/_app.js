import "../styles/globals.css";
import Layout from "../components/shared/Layout.jsx";
// import { Auth0Provider } from "@auth0/auth0-react";\
import { UserProvider } from '@auth0/nextjs-auth0/client';

function MyApp({ Component, pageProps }) {
	return (
		<UserProvider>
		<Layout>
			<Component {...pageProps} />
		</Layout>
		</UserProvider>
	);
}

export default MyApp;
