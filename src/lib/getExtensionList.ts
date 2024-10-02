import { ExtensionInterface } from "@/types-d";
import extensionStore from "./ZustandStores/store";

export const getExtensionList = async (): Promise<ExtensionInterface[]> => {
  try {
    const response = await fetch("http://localhost:5050/cards/extensions");
    const data: ExtensionInterface[] = await response.json();
    extensionStore.setState({ extensionList: data });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
