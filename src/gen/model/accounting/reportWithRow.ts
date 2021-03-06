/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.9
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ReportFields } from '././reportFields';
import { ReportRows } from '././reportRows';

export class ReportWithRow {
    /**
    * Report id
    */
    'reportID'?: string;
    /**
    * Name of the report
    */
    'reportName'?: string;
    /**
    * Title of the report
    */
    'reportTitle'?: string;
    /**
    * The type of report (BalanceSheet,ProfitLoss, etc)
    */
    'reportType'?: string;
    /**
    * Report titles array (3 to 4 strings with the report name, orgnisation name and time frame of report)
    */
    'reportTitles'?: Array<string>;
    /**
    * Date of report
    */
    'reportDate'?: string;
    'rows'?: Array<ReportRows>;
    /**
    * Updated Date
    */
    'updatedDateUTC'?: Date;
    'fields'?: Array<ReportFields>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reportID",
            "baseName": "ReportID",
            "type": "string"
        },
        {
            "name": "reportName",
            "baseName": "ReportName",
            "type": "string"
        },
        {
            "name": "reportTitle",
            "baseName": "ReportTitle",
            "type": "string"
        },
        {
            "name": "reportType",
            "baseName": "ReportType",
            "type": "string"
        },
        {
            "name": "reportTitles",
            "baseName": "ReportTitles",
            "type": "Array<string>"
        },
        {
            "name": "reportDate",
            "baseName": "ReportDate",
            "type": "string"
        },
        {
            "name": "rows",
            "baseName": "Rows",
            "type": "Array<ReportRows>"
        },
        {
            "name": "updatedDateUTC",
            "baseName": "UpdatedDateUTC",
            "type": "Date"
        },
        {
            "name": "fields",
            "baseName": "Fields",
            "type": "Array<ReportFields>"
        }    ];

    static getAttributeTypeMap() {
        return ReportWithRow.attributeTypeMap;
    }
}

