import { userContext, collageContext } from "../../App";

const ComponentE = () => {
  return (
    <div>
      <userContext.Consumer>
        {(user) => {
          return (
            <collageContext.Consumer>
              {(collage) => {
                return (
                  <div>
                    name : {user} , collage : {collage}
                  </div>
                );
              }}
            </collageContext.Consumer>
          );
        }}
      </userContext.Consumer>
    </div>
  );
};

export default ComponentE;
