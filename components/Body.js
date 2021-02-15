import { useIntl, FormattedMessage } from "react-intl";

const Body = () => {
  const intl = useIntl();
  return (
    <div>
      <h2>
        <FormattedMessage id="title" />
      </h2>
      <p>
        <FormattedMessage id="body" />
      </p>
    </div>
  );
};

export default Body;
