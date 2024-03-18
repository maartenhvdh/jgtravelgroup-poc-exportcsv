import axios from 'axios';
import React, { useState } from "react";

interface IProps {
    element: CustomElement.Element,
    context: CustomElement.Context,
    handleSave: (value: string | null | object | CustomElement.ValueObject | any) => void
    value: string | null | object | CustomElement.ValueObject | any
}

export const ExportCustomElement: React.FC<IProps> = ({ element, context, value, handleSave }) => {
    return <>
        <div className="custom-element">
            <div className="d-flex justify-content-center mb-3 p-1 py-5">
                <a className="btn btn-xs btn-secondary" href={`/api/export-csv?codename=${context.item.codename}`}>Export single tour to CSV</a>
            </div>
        </div>
    </>
}