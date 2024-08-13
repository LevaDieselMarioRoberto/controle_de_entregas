import { useState, useEffect } from "react";
import { Input } from "@chakra-ui/react";

export default function DateSelector({ onDateChange }) {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    if (onDateChange) {
      onDateChange(date);
    }
  }, [date, onDateChange]);

  return (
    <Input
      value={date}
      onChange={(e) => setDate(e.target.value)}
      w="160px"
      type="date"
      focusBorderColor="red.500"
      isRequired
    />
  )
}
