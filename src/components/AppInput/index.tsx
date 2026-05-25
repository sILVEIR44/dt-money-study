import { MaterialIcons } from "@expo/vector-icons";
import { Control, FieldValues, Path } from "react-hook-form";
import { TextInputProps } from "react-native";

interface AppInputParams<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: Path<T>;
  leftIconName?: keyof typeof MaterialIcons.glyphMap;
  label?: string;
}

export const AppInput = <T extends FieldValues>({
  control,
  name,
  label,
  leftIconName,
  ...rest
}: AppInputParams<T>) => {
  return null;
};
