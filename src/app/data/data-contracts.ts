/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ExpenseDto {
  /** @format uuid */
  id?: string;
  /** @format double */
  cost?: number;
  /** @format date-time */
  date?: string;
  /** @format uuid */
  subCategoryId?: string;
}

export interface MainCategoryDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
  /** @format double */
  totalExpenses?: number;
}

export interface SubCategoryDto {
  /** @format uuid */
  id?: string;
  /**
   * @minLength 3
   * @maxLength 100
   */
  name: string;
  /** @format uuid */
  mainCategoryId?: string;
  /**
   * @format double
   * @min 0
   */
  totalExpenses?: number;
  /** @format date-time */
  createdAt?: string;
}
