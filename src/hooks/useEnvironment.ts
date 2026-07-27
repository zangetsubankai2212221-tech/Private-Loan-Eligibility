import { useState, useEffect } from "react";
import type { EnvironmentConfig } from "../types";
import { loadEnvironment } from "../utils/environment";

export function useEnvironment(): EnvironmentConfig {
  const [config, setConfig] = useState<EnvironmentConfig>(() => loadEnvironment());

  useEffect(() => {
    setConfig(loadEnvironment());
  }, []);

  return config;
}
