export const ENDPOINTS = {
  getAllDays: "/public/days",
  getDay: (day: string) => `/public/days/${day}`,
  bookVisit: "/public/visits",

  getVisits: (day: string) => `/visits/${day}/visits`,
  cancelVisit: (visitId: string) => `/visits/${visitId}/cancel`,

  closeDay: (day: string) => `/admin/days/${day}/close`,
  openDay: (day: string) => `/admin/days/${day}/open`,
  blockSlots: (day: string) => `/admin/days/${day}/slots/block`,
  unblockSlots: (day: string) => `/admin/days/${day}/slots/unblock`,
};

export const ADMIN_ENDPOINTS = {
  login: "/auth/login",
};
