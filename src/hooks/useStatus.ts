import { useCallback, useState } from "react";

type StatusType = "success" | "error" | "idle";

export default function useStatus(initialStatus: StatusType = 'idle') {
  const [status, setStatus] = useState<StatusType>(initialStatus);

  const updateStatus = useCallback((newStatus: StatusType) => {
    setStatus(newStatus);
  }, []);

  return { status, updateStatus };
}