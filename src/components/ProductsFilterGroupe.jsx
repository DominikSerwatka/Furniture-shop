import React from 'react'

function ProductsFilterGroupe({ value, onFilterChange, category, options, name }) {
  return (
    <>
        <div className="mb-6">
            <h3 className="font-semibold mb-2">{name}</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
                {options.map((option, index) => { 
                return (<li className="flex itmes-center gap-4" key={index}>
                    <input type="checkbox" id="mat-wood" className="h-4 w-4" checked={value[category]?.includes(option)} onChange={() => onFilterChange(category, option)}/>
                    <label htmlFor="mat-wood">{option}</label>
                </li>)
                })}
            </ul>
        </div>
    </>
  )
}

export default ProductsFilterGroupe