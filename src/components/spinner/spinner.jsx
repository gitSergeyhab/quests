import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";


const override = css`
  display: block;
  margin: 40px auto;
`;

const Spinner = () => {
  return (
  <div style={{paddingTop: '10%', textAlign: 'center', fontSize: '2.7em'}}>
     ... Loading ...
     <HashLoader size={150} css={override}  color='white'/>
     </div>)
}

export default Spinner;
