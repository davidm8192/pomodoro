// home page titles
export const HOME_TITLE = "POMODORO";
export const HOME_SUBTITLE = "TIME!";

// home page buttons
export const SESSION_BUTTON = {
    LABEL: "sessions",
    OPTION_ARRAY: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
};

export const STUDY_BUTTON = {
    LABEL: "study",
    OPTION_ARRAY: ["15", "25", "30", "45", "60"],
};

export const BREAK_BUTTON = {
    LABEL: "break",
    OPTION_ARRAY: ["5", "10", "15", "20", "25", "30"],
};

export const TIME_UNIT = "minutes";

export const START_BUTTON = "start";

export const CANCEL_BUTTON = "cancel";

export const SETTINGS_COMMENT = "customize time, sounds, and theme!";

// settings menu sections
export const TIMER_SECTION = "timer";
export const ALARM_SECTION = "alarm";
export const THEMES_SECTION = "themes";

// settings input labels
export const SESSIONS_INPUT_LABEL = "sessions";
export const STUDY_INPUT_LABEL = "study";
export const BREAK_INPUT_LABEL = "break";

// settings input limits
export const SESSIONS_MAX = 999;
export const STUDY_MAX = 5940; // 99 hours
export const BREAK_MAX = 5940; // 99 hours

// alarm options
export const ALARM_OPTIONS = ["None", "Ripples", "Harp", "Chimes", "Timba"];

// timer labels
export const TIMER_LABELS = {
    PAUSE: 'Pause',
    RESUME: 'Resume',
    SKIP: 'Skip',
    STUDY_TIME: 'Study Time',
    BREAK_TIME: 'Break Time',
    SESSION: 'Session',
    OF: 'of',
    ALL_SESSIONS_COMPLETE: 'All Sessions Complete!',
    RETURN_HOME: 'Return Home',
} as const; 