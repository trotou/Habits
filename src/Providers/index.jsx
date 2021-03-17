import { UserProvider } from "./User";
import { GroupProvider } from "./Group";
import { HabitsProvider } from "./Habits";
import { ListGroupsProvider } from "./ListGroups";
import { PersonalProvider } from "./PersonalActivities";
import { ActivitiesGoalsProvider } from "./ListActivitiesGoals";
import { ColorSchemeProvider } from "./ColorScheme";

const Providers = ({ children }) => {
  return (
    <ColorSchemeProvider>
      <HabitsProvider>
        <ListGroupsProvider>
          <ActivitiesGoalsProvider>
            <PersonalProvider>
              <GroupProvider>
                <UserProvider>{children}</UserProvider>
              </GroupProvider>
            </PersonalProvider>
          </ActivitiesGoalsProvider>
        </ListGroupsProvider>
      </HabitsProvider>
    </ColorSchemeProvider>
  );
};

export default Providers;
