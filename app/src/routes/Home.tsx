import "@/assets/pages/home.less";
import "@/assets/pages/chat.less";
import ChatWrapper from "@/components/home/ChatWrapper.tsx";
import SideBar from "@/components/home/SideBar.tsx";
import { useSelector } from "react-redux";
import { selectMarket } from "@/store/chat.ts";
import ModelMarket from "@/components/home/ModelMarket.tsx";
import ErrorBoundary from "@/components/ErrorBoundary.tsx";
import { withTranslation, WithTranslation } from "react-i18next";

function Home({ t, i18n, tReady }: WithTranslation) {
  const market = useSelector(selectMarket);

  return (
    <ErrorBoundary t={t} i18n={i18n} tReady={tReady}>
      <div className={`main`}>
        <SideBar />
        {market ? <ModelMarket /> : <ChatWrapper />}
      </div>
    </ErrorBoundary>
  );
}

export default withTranslation()(Home);