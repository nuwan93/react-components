import Button from "./Button";
import { GiAk47, GiArcher, GiArrest } from "react-icons/gi";

const App = () => {
  return (
    <div>
      <div>
        <Button primary className={"mb-2"}>
          <GiAk47 />
          Primary
        </Button>
      </div>
      <div>
        <Button outline secondary>
          <GiArcher />
          Seconday
        </Button>
      </div>
      <div>
        <Button success outline>
          <GiArrest />
          neutral
        </Button>
      </div>
      <div>
        <Button warning>warning</Button>
      </div>
      <div>
        <Button danger>Danger</Button>
      </div>
    </div>
  );
};

export default App;
