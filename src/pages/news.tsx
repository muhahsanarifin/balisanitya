import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../utils/redux/store";
import { newsAction } from "../utils/redux/reducers/news";

import Header from "../components/Header";
import * as Sections from "../components/Sections";
import * as Button from "../components/Button";
import * as Card from "../components/Card";
import * as Notification from "../components/Notification";
// import auth from "../utils/redux/reducers/auth";
import * as Modal from "../components/Modal";

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

  //Login state
  const login = useSelector((state: RootState) => state.auth.login);

  // Get News state
  const getNews = useSelector((state: RootState) => state.news.getNews);

  // Query News state
  const query = useSelector((state: RootState) => state.news.queryNews);

  // Get new state
  const getNew = useSelector((state: RootState) => state.news.getNew);

  // Confirm news state
  const confirmNews = useSelector((state: RootState) => state.news.confirmNews);

  // Update new state
  const updateNew = useSelector((state: RootState) => state.news.updateNew);

  // Delete new state
  const deleteNew = useSelector((state: RootState) => state.news.deleteNew);

  const handleRequestCloseForDeleteNewAlert = () => {
    dispatch(newsAction.clearDeleteNew());
    if (getNews?.data?.data?.length === 1) {
      dispatch(newsAction.queryNews({ ...query, page: query.page - 1 }));
    }
    dispatch(newsAction.clearGetNew());
  };

  return (
    <main className="relative min-h-screen flex flex-col p-8 border-2 border-solid border-blue-500">
      {/* Notification Update New Alert */}
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
            title={
              updateNew?.isRejected
                ? JSON.parse(updateNew?.err)?.status
                : updateNew?.data?.status
            }
            description={
              updateNew?.isRejected
                ? JSON.parse(updateNew?.err)?.msg
                : updateNew?.data?.msg
            }
            onRequestClose={() => dispatch(newsAction.clearUpdateNew())}
            hideCloseButton={
              updateNew?.isFulfilled || updateNew?.isRejected ? false : true
            }
          />
        </section>
      ) : null}

      {/* Notification Delete New Alert */}
      {deleteNew?.isFulfilled || deleteNew?.isRejected ? (
        <section className="absolute right-4 xs:inset-x-0 bottom-4 flex justify-center z-50">
          <Notification.Alert
            icon={
              deleteNew?.isFulfilled
                ? "success"
                : deleteNew?.isRejected
                ? "error"
                : "info"
            }
            title={
              deleteNew?.isRejected
                ? JSON.parse(deleteNew?.err)?.status
                : deleteNew?.data?.status
            }
            description={
              deleteNew?.isRejected
                ? JSON.parse(deleteNew?.err)?.msg
                : deleteNew?.data?.msg
            }
            onRequestClose={handleRequestCloseForDeleteNewAlert}
            hideCloseButton={
              deleteNew?.isFulfilled || deleteNew?.isRejected ? false : true
            }
          />
        </section>
      ) : null}

      <section className="flex">
        <Button.Back
          title={"Back to news"}
          to={login?.data?.data?.bu_role ? "/news/admin" : "/news"}
        />
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

      {/* Delete modal */}
      <Modal.ModalBaseEmpty
        isOpen={confirmNews?.isDeleted}
        onRequestClose={() =>
          dispatch(newsAction.confirmNews({ ...confirmNews, isDeleted: false }))
        }
        footer={<Card.NewDelete />}
      >
        <div className="flex">
          <h1 className="text-sm">
            <span>Are you sure?, </span>
            <span className="text-red-600 uppercase font-bold">
              {getNew?.data?.data?.title}{" "}
            </span>
            card.
          </h1>
        </div>
      </Modal.ModalBaseEmpty>
    </main>
  );
};
