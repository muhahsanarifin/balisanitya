import Header from "../components/Header";
import * as Sections from "../components/Sections";
import * as Button from "../components/Button";

export const View = () => {
  return (
    <main className="relative">
      <Button.WhatsApp />
      <Header />
      <Sections.Services />
    </main>
  );
};

export const Edit = () => {
  return (
    <main className="relative border-2 border-solid border-red-500">
      <h1>Services Edit</h1>
    </main>
  );
};

export const Create = () => {
  return (
    <main className="relative border-2 border-solid border-red-500">
      <h1>Services Create</h1>
    </main>
  );
};

export const Detail = () => {
  return <main className="border-2 border-solid border-blue-500">
    <h1>Services Detail</h1>
  </main>;
};
