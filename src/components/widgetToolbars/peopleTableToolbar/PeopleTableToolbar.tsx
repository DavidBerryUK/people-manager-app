import { usePeopleContext } from "../../../contexts/peopleContext/PeopleContext";
import CommandPeopleListFilterNameSet from "../../../contexts/peopleContext/actions/CommandPeopleListFilterNameSet";
import ToolBar from "../../widgetsUI/ToolBar/ToolBar";

const PeopleTableToolBar: React.FC = (props) => {

  const { state: peopleState, dispatch: peopleDispatch } = usePeopleContext();

  const handleNameChangeEvent = (name: string) => {
    peopleDispatch(new CommandPeopleListFilterNameSet(name));
  };

  return <ToolBar>
    <div>
      People Toolbar
    </div>
    <div>
      name:{peopleState.peopleListFilter.name}
    </div>
    <button onClick={() => { handleNameChangeEvent('') }}>clear</button>
    <button onClick={() => { handleNameChangeEvent('ve') }}>ve</button>
    <button onClick={() => { handleNameChangeEvent('brian') }}>brian</button>
    <button onClick={() => { handleNameChangeEvent('oli') }}>oli</button>
    <button onClick={() => { handleNameChangeEvent('phi') }}>phi</button>
  </ToolBar>
};

export default PeopleTableToolBar;
