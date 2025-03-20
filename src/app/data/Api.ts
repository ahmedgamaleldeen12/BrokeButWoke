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

import { ExpenseDto, MainCategoryDto, SubCategoryDto } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Expense
   * @name ExpenseList
   * @request GET:/api/Expense
   */
  expenseList = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/api/Expense`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Expense
   * @name ExpenseCreate
   * @request POST:/api/Expense
   */
  expenseCreate = (data: ExpenseDto, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/api/Expense`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Expense
   * @name ExpenseDetail
   * @request GET:/api/Expense/{id}
   */
  expenseDetail = (id: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/api/Expense/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Expense
   * @name ExpenseUpdate
   * @request PUT:/api/Expense/{id}
   */
  expenseUpdate = (id: string, data: ExpenseDto, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/api/Expense/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Expense
   * @name ExpenseDelete
   * @request DELETE:/api/Expense/{id}
   */
  expenseDelete = (id: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/api/Expense/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags MainCategory
   * @name MainCategoryList
   * @request GET:/api/MainCategory
   */
  mainCategoryList = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/api/MainCategory`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags MainCategory
   * @name MainCategoryCreate
   * @request POST:/api/MainCategory
   */
  mainCategoryCreate = (data: MainCategoryDto, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/api/MainCategory`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags MainCategory
   * @name MainCategoryDetail
   * @request GET:/api/MainCategory/{id}
   */
  mainCategoryDetail = (id: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/api/MainCategory/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags MainCategory
   * @name MainCategoryUpdate
   * @request PUT:/api/MainCategory/{id}
   */
  mainCategoryUpdate = (id: string, data: MainCategoryDto, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/api/MainCategory/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags MainCategory
   * @name MainCategoryDelete
   * @request DELETE:/api/MainCategory/{id}
   */
  mainCategoryDelete = (id: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/api/MainCategory/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags SubCategory
   * @name SubCategoryByMainCategoryDetail
   * @request GET:/api/SubCategory/by-main-category/{mainCategoryId}
   */
  subCategoryByMainCategoryDetail = (mainCategoryId: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/api/SubCategory/by-main-category/${mainCategoryId}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags SubCategory
   * @name SubCategoryDetail
   * @request GET:/api/SubCategory/{id}
   */
  subCategoryDetail = (id: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/api/SubCategory/${id}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags SubCategory
   * @name SubCategoryUpdate
   * @request PUT:/api/SubCategory/{id}
   */
  subCategoryUpdate = (id: string, data: SubCategoryDto, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/api/SubCategory/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags SubCategory
   * @name SubCategoryDelete
   * @request DELETE:/api/SubCategory/{id}
   */
  subCategoryDelete = (id: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/api/SubCategory/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags SubCategory
   * @name SubCategoryCreate
   * @request POST:/api/SubCategory
   */
  subCategoryCreate = (data: SubCategoryDto, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/api/SubCategory`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
