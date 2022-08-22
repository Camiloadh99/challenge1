// import { DateTime } from 'luxon';

// const UTC_ZONE = 'UTC';
// const BTA_ZONE = 'America/Bogota';
// const ES_LOCALE = 'es';

export enum FormatDateEnum {
  DATE_FORMAT = "yyyy/MM/dd",
  DATE_FORMAT_HYPEN = "yyyy-MM-dd",
  DATE_FORMAT_DD = "dd/MM/yyyy",
  DATE_TIME_FORMAT_12H = "yyyy-MM-dd hh:mm:ss a",
  DATE_TIME_FORMAT_24H = "yyyy-MM-dd HH:mm:ss",
  DAY_FORMAT = "dd",
  TIME_FORMAT_12 = "HH:mm",
  DATE_WEEK_FORMAT = "cccc, dd - LLLL",
}

// //Tools
// /**
//  *
//  * @returns Offset seconds
//  */
// const getMillisecondsOffset = () => {
//   return DateTime.now().set({ millisecond: 0 }).offset * 60000;
// };

// //Tools
// /**
//  *
//  * @returns Date now in milliseconds
//  */
// const getNowInMilliseconds = () => {
//   return DateTime.now().toMillis();
// };
// /**
//  *
//  * @returns Millisecons of today and subtract n days
//  */
// const getTodaySubInMilliseconds = (days: number) => {
//   return DateTime.now().plus({ day: -days }).toMillis();
// };

// //Methods
// /**
//  *
//  * @returns Local offset
//  */
// const getLocalOffset = () => {
//   return DateTime.local().offset;
// };

// /**
//  *
//  * @param hour Optional : hour [default : 1]
//  * @param minute Optional : minute [default : 0]
//  * @param second Optional : second [default : 0]
//  * @returns milisecions of current day at 1:00:00
//  */
// const getBeginDayDate = (
//   hour: number = 1,
//   minute: number = 0,
//   second: number = 0,
// ) => {
//   return DateTime.now()
//     .set({ hour, minute, second, millisecond: 0 })
//     .toMillis();
// };

// /**
//  *
//  * @returns String date with format yyyy/MM/dd
//  */
// const getTodayDate = () => {
//   return DateTime.local().toFormat(FormatDateEnum.DATE_FORMAT);
// };

// /**
//  *
//  * @param date ISO Date String
//  * @param fromFormat Luxon formating string
//  * @returns Date string with format yyyy/MM/dd
//  */
// const formatDate = (date: string, fromFormat: string) => {
//   return DateTime.fromFormat(date, fromFormat).toFormat(
//     FormatDateEnum.DATE_FORMAT,
//   );
// };

// /**
//  *
//  * @param millis milliseconds date
//  */
// const formatMillisToDate = (millis: number) => {
//   return DateTime.fromMillis(millis).toFormat(FormatDateEnum.DATE_FORMAT_DD);
// };

// /**
//  *
//  * @param millis milliseconds date
//  */
// const formatDateToMillis = (date: Date) => {
//   return DateTime.fromJSDate(date).toMillis();
// };

// /**
//  *
//  * @returns Millisecons of first day of month at 1:00:00
//  */
// const getFirstDayOfMonth = () => {
//   return DateTime.now()
//     .set({ hour: 1, minute: 0, second: 0, millisecond: 0, day: 1 })
//     .toMillis();
// };

// /**
//  *
//  * @returns Millisecons of first day of month at 1:00:00 and subtract 1 mounth
//  */
// const getFirstDayOfMonthSubsMounth = () => {
//   return DateTime.now()
//     .plus({ month: -1 })
//     .set({ hour: 1, minute: 0, second: 0, millisecond: 0, day: 1 })
//     .toMillis();
// };

// /**
//  *
//  * @returns Millisecons of last day of month at 18:59:999
//  */
// const getLastDayOfMonth = () => {
//   return DateTime.now()
//     .plus({ month: 1 })
//     .set({ hour: 18, minute: 59, second: 59, millisecond: 999, day: 0 })
//     .toMillis();
// };

// /**
//  *
//  * @returns Millisecons of first day of month at 1:00:00 and plus 1 mounth
//  */
// const getFirstDayOfMonthPlusMounth = () => {
//   return DateTime.now()
//     .plus({ month: 2 })
//     .set({ hour: 18, minute: 59, second: 59, millisecond: 999, day: 0 })
//     .toMillis();
// };

// /**
//  *
//  * @returns Days left for the end of the month
//  */
// const getRemainingMonthDays = () => {
//   const currentDay = parseInt(
//     DateTime.now().toFormat(FormatDateEnum.DAY_FORMAT),
//   );
//   const monthDays = parseInt(
//     DateTime.now()
//       .plus({ month: 1 })
//       .set({ day: 0 })
//       .toFormat(FormatDateEnum.DAY_FORMAT),
//   );
//   return monthDays - currentDay;
// };

// /**
//  *
//  * @returns Current date one moth ago at 1:00:00
//  */
// const getDateOneMonthAgo = () => {
//   const currentDay = parseInt(
//     DateTime.now().toFormat(FormatDateEnum.DAY_FORMAT),
//   );
//   return DateTime.now()
//     .plus({ month: -1 })
//     .set({ day: currentDay, hour: 1, minute: 0, second: 0, millisecond: 0 })
//     .toMillis();
// };

// /**
//  *
//  * @param isodate ISO Date String
//  * @param format FormatDateEnum
//  * @returns Date string with suministred format
//  */
// const getFormatDateFromIso = (isodate: string, format: FormatDateEnum) => {
//   return DateTime.fromISO(isodate)
//     .setZone(UTC_ZONE)
//     .setLocale(ES_LOCALE)
//     .toFormat(format);
// };

// /**
//  *
//  * @param isodate ISO Date string
//  * @returns String date with that format : Lunes, 20 de Enero
//  */
// const getFormatLocalDateFromIso = (isodate: string) => {
//   return DateTime.fromISO(isodate)
//     .setZone(UTC_ZONE)
//     .setLocale(ES_LOCALE)
//     .toFormat(FormatDateEnum.DATE_WEEK_FORMAT)
//     .replace('-', 'de');
// };

// /**
//  *
//  * @param isodate ISO Date String
//  * @returns Milliseconds from ISO Date
//  */
// const getDateFromIso = (isodate: string) => {
//   return DateTime.fromISO(isodate).setZone(UTC_ZONE).toMillis();
// };

// /**
//  *
//  * @returns Milliseconds of current date
//  */
// const getCurrentDate = () => {
//   const offset = getMillisecondsOffset();
//   const now = DateTime.now().set({ millisecond: 0 }).toMillis();
//   return now + offset;
// };

// /**
//  *
//  * @returns JSDate of current date
//  */
// const getCurrentJSDate = () => {
//   return DateTime.now().set({ millisecond: 0 }).toJSDate();
// };

// /**
//  *
//  * @param date
//  * @param format Optional : Luxon formating string [Default : yyyy-MM-dd hh:mm:ss a]
//  * @returns Date string with suministred format
//  */
// const getISOfromJSDate = (
//   date: Date,
//   format: string = FormatDateEnum.DATE_TIME_FORMAT_12H,
// ) => {
//   return DateTime.fromJSDate(date).toFormat(format);
// };

// /**
//  *
//  * @param date JS Date
//  * @returns ISO Date String
//  */
// const getISOfromDate = (date: Date) => {
//   const offset = getMillisecondsOffset();
//   const now = DateTime.fromJSDate(date).set({ millisecond: 0 }).toMillis();
//   return now + offset;
// };

// /**
//  *
//  * @param date
//  * @param format Optional : Luxon formating string  [Default : yyyy-MM-dd HH:mm:ss]
//  * @returns
//  */
// const getDateFromFormat = (
//   date: string,
//   format: string = FormatDateEnum.DATE_TIME_FORMAT_24H,
//   hour?: number,
//   minute?: number,
//   second?: number,
// ) => {
//   const dateFromFormat = DateTime.fromFormat(date, format)
//     .set({
//       hour,
//       minute,
//       second,
//       millisecond: 0,
//     })
//     .toMillis();
//   return dateFromFormat;
// };

// /**
//  *
//  * @param date
//  * @param daysToAdd Optional : Qty of days to add [Default : 1]
//  * @param format Optional : Luxon formating string  [Default : yyyy-MM-dd]
//  * @returns
//  */
// const addDaysFromFormat = (
//   date: string,
//   daysToAdd: number = 1,
//   format: string = FormatDateEnum.DATE_FORMAT_HYPEN,
// ) => {
//   const addedDate = DateTime.fromFormat(date, format)
//     .plus({ days: daysToAdd })
//     .toFormat(format);
//   return addedDate;
// };

// const service = {
//   getLocalOffset,
//   getBeginDayDate,
//   getTodayDate,
//   formatDate,
//   getRemainingMonthDays,
//   getFirstDayOfMonth,
//   getLastDayOfMonth,
//   getDateOneMonthAgo,
//   getFormatDateFromIso,
//   getDateFromIso,
//   getCurrentDate,
//   getCurrentJSDate,
//   getISOfromJSDate,
//   getISOfromDate,
//   getDateFromFormat,
//   getFormatLocalDateFromIso,
//   addDaysFromFormat,
//   formatMillisToDate,
//   formatDateToMillis,
//   getFirstDayOfMonthSubsMounth,
//   getFirstDayOfMonthPlusMounth,
//   getTodaySubInMilliseconds,
// };
// export default service;
// export {
//   addDaysFromFormat,
//   formatDate,
//   getBeginDayDate,
//   getCurrentDate,
//   getCurrentJSDate,
//   getDateFromFormat,
//   getDateFromIso,
//   getDateOneMonthAgo,
//   getFirstDayOfMonth,
//   getFormatDateFromIso,
//   getFormatLocalDateFromIso,
//   getISOfromDate,
//   getISOfromJSDate,
//   getLastDayOfMonth,
//   getLocalOffset,
//   getRemainingMonthDays,
//   getTodayDate,
//   formatMillisToDate,
//   formatDateToMillis,
//   getNowInMilliseconds,
//   getFirstDayOfMonthSubsMounth,
//   getFirstDayOfMonthPlusMounth,
//   getTodaySubInMilliseconds,
// };
