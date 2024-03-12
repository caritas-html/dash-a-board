import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import SideMenu from "@/components/SideMenu/SideMenu";
import DashboardPage from "./dashboard/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <SideMenu />
      <DashboardPage />
    </main>
  );
}
