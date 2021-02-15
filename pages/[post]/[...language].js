import { useRouter } from "next/router";
const english = () => {
  const router = useRouter();
  const { language } = router.query;
  return (
    <div>
      <p>
        Hi welcome to the <strong>{language}</strong> Language we will show some
        nice things
      </p>
      <h2>{JSON.stringify(router.query)}</h2>
    </div>
  );
};

export default english;
