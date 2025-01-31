import { Bot, Globe, TabletSmartphone, CircleHelp } from "lucide-react";
  
  export const categoriesIcons = {
    "Bot": <Bot size={38} />,
    "Websites": <Globe size={38} />,
    "Apps": <TabletSmartphone size={38} />,
  };

  export const getCategoryIcon = (iconName) => categoriesIcons[iconName] || <CircleHelp size={38} />;