import { Typography } from "@mui/material";

interface IPageDescriptipon {
  title: string;
  description?: string;
}
const PageDescription = (props: IPageDescriptipon): JSX.Element => {
  const { title, description } = props;
  return (
    <>
      <Typography variant="h2" component="h1" mb={4}>
        {title}
      </Typography>
      {description ? (
        <Typography fontSize={24}>{description}</Typography>
      ) : undefined}
    </>
  );
};

export default PageDescription;
