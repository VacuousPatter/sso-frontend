import { Box } from "@chakra-ui/react";
import BtnColorModeChange from "components/BtnColorModeChange";
import { AuthProvider } from "components/providers/AuthProvider";
import { Header } from "components/templates/Header";
import LoggedDrawer from "components/templates/LoggedDrawer";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useAuthLoggedState } from "states/Auth";
import styles from "./LoggedArea.module.scss";

interface Props {
  children: React.ReactNode;
}

export function LoggedAreaLayout(props: Props): JSX.Element {
  const router = useRouter();
  const logged = useRecoilValue(useAuthLoggedState);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    console.log(logged.loading, logged.logged);
    if (!logged.loading && !logged.logged) {
      router.push("/");
    }
  }, [logged]);

  return (
    <div>
      {(logged.loading || !isClient) && <h1>Carregando</h1>}
      {logged.logged && isClient && (
        <Box>
          <Header></Header>
          <BtnColorModeChange></BtnColorModeChange>

          <div className={styles["content-area"]}>
            <LoggedDrawer></LoggedDrawer>
            <main
              style={{
                minHeight: "calc(100vh - 53px)",
              }}
            >
              {props.children}
            </main>
          </div>
        </Box>
      )}
    </div>
  );
}
