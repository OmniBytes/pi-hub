import type { OptionValues } from "@omnibytes/typescript/types";

export const SEVERITY = {
  debug: "debug",
  info: "info",
  log: "log",
  warn: "warn",
  error: "error",
} as const;

type Severity = OptionValues<typeof SEVERITY>;

interface LoggerParams {
  label: string;
  message: string;
  payload?: object;
  severity?: Severity;
}

export function log(params: LoggerParams) {
  try {
    const { label, message, payload = {}, severity = SEVERITY.info } = params;
    const string = `[${label}] ${message}`;

    if (process.env.NODE_ENV === "development") {
      console.log(`${severity} ${string}`);
      console.table(payload);
      return;
    }

    const msg = JSON.stringify({ label, message: string, payload });

    switch (severity) {
      case SEVERITY.debug:
        console.debug(msg);
        break;

      case SEVERITY.info:
        console.info(msg);
        break;

      case SEVERITY.warn:
        console.warn(msg);
        break;

      case SEVERITY.error:
        console.error(msg);
        break;

      default:
        console.log(msg);
        break;
    }
  } catch (err) {
    console.error("[logger] error", JSON.stringify(err));
  }
}

export function logFactory(label: LoggerParams["label"]) {
  const debug = (message: string, payload?: object) => {
    log({ label, message, payload, severity: SEVERITY.debug });
  };

  const info = (message: string, payload?: object) => {
    log({ label, message, payload, severity: SEVERITY.info });
  };

  const warn = (message: string, payload?: object) => {
    log({ label, message, payload, severity: SEVERITY.warn });
  };

  const error = (message: string, payload?: object) => {
    log({ label, message, payload, severity: SEVERITY.error });
  };

  return { debug, info, warn, error };
}
