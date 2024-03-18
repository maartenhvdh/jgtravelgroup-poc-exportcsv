import axios from 'axios';
import React, { useState } from "react";

interface IProps {
    element: CustomElement.Element,
    context: CustomElement.Context,
    handleSave: (value: string | null | object | CustomElement.ValueObject | any) => void
    value: string | null | object | CustomElement.ValueObject | any
}

export const ExportToursCustomElement: React.FC<IProps> = ({ element, context, value, handleSave }) => {
    return <>
        <div className="custom-element">
            <div className="flex justify-center mb-3 p-1 py-5">
                <a className="text-sm bg-gray-600 text-white py-1 px-3 rounded" href={`https://jgtravelgroup-poc-exportcsv-fbwt.vercel.app/api/export-tours-csv?codename=${context.item.codename}`}>Export all tours to CSV</a>
            </div>
        </div>
    </>
}