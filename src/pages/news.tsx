import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../utils/redux/store";
import { newsAction } from "../utils/redux/reducers/news";

import Header from "../components/Header";
import * as Sections from "../components/Sections";
import * as Button from "../components/Button";
import * as Card from "../components/Card";
import * as Notification from "../components/Notification";

export const View = () => {
  return (
    <main className="relative">
      <Header />
      <Sections.News />
    </main>
  );
};

export const Create = () => {
  return (
    <main className="relative border-2 border-solid border-red-500">
      <h1>News Create</h1>
    </main>
  );
};

export const Update = () => {
  return <Card.NewsUpdate />;
};

export const Detail = () => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();

  // Confirm news state
  const confirmNews = useSelector((state: RootState) => state.news.confirmNews);

  // Update new state
  const updateNew = useSelector((state: RootState) => state.news.updateNew);

  return (
    <main className="relative min-h-screen flex flex-col p-8">
      {/* Notification */}
      {updateNew?.isFulfilled || updateNew?.isRejected ? (
        <section className="absolute right-4 xs:inset-x-0 bottom-4 flex justify-center z-50">
          <Notification.Alert
            icon={
              updateNew?.isFulfilled
                ? "success"
                : updateNew?.isRejected
                ? "error"
                : "info"
            }
            title={JSON.parse(updateNew?.err)?.status}
            description={JSON.parse(updateNew?.err)?.msg}
            onRequestClose={() => dispatch(newsAction.clearUpdateNew())}
            hideCloseButton={
              updateNew?.isFulfilled || updateNew?.isRejected ? false : true
            }
          />
        </section>
      ) : null}
      <section className="flex">
        <Button.Back title={"Back to news"} to={"/news"} />
      </section>
      <section className="flex justify-center">
        <Card.NewsDetail />
      </section>
      {/* Update modal */}
      {confirmNews?.isUpdated ? (
        <section className="absolute inset-0 flex justify-center backdrop-invert bg-white/30 backdrop-opacity-10">
          <Update />
        </section>
      ) : null}
    </main>
  );
};
