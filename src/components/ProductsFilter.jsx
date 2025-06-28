import React from 'react'

function ProductsFilter({ value, onFilterChange }) {
  return (
    <>
        <h2 className="text-xl font-bold mb-6">Filtry</h2>
        
        <div className="mb-6">
            <h3 className="font-semibold mb-2">Materiał</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
                <li className="flex itmes-center gap-4">
                    <input type="checkbox" id="mat-wood" className="h-4 w-4" checked={value.materials.includes('drewno')} onChange={() => onFilterChange('materials', 'drewno')}/>
                    <label htmlFor="mat-wood">Drewno</label>
                </li>
                <li className="flex itmes-center gap-4">
                    <input type="checkbox" id="mat-metal" className="h-4 w-4" checked={value.materials.includes('metal')} onChange={() => onFilterChange('materials', 'metal')}/>
                    <label htmlFor="mat-metal">Metal</label>
                </li>
            </ul>
        </div>

        <div className="mb-6">
            <h3 className="font-semibold mb-2">Pomieszczenie</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
                <li className="flex itmes-center gap-4">
                    <input type="checkbox" id="mat-room" className="h-4 w-4" checked={value.space.includes('pokoj')} onChange={() => onFilterChange('space', 'pokoj')}/>
                    <label htmlFor="mat-room">Pokój</label>
                </li>
                <li className="flex itmes-center gap-4">
                    <input type="checkbox" id="mat-kitchen" className="h-4 w-4" checked={value.space.includes('kuchnia')} onChange={() => onFilterChange('space', 'kuchnia')}/>
                    <label htmlFor="mat-kitchen">Kuchnia</label>
                </li>
                <li className="flex itmes-center gap-4">
                    <input type="checkbox" id="mat-bathroom" className="h-4 w-4" checked={value.space.includes('lazienka')} onChange={() => onFilterChange('space', 'lazienka')}/>
                    <label htmlFor="mat-bathroom">Łazienka</label>
                </li>
                <li className="flex itmes-center gap-4">
                    <input type="checkbox" id="mat-office" className="h-4 w-4" checked={value.space.includes('biuro')} onChange={() => onFilterChange('space', 'biuro')}/>
                    <label htmlFor="mat-office">Biuro</label>
                </li>
            </ul>
        </div>

        <div>
            <h3 className="font-semibold mb-2">Kolekcje</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
                <li className="flex itmes-center gap-4">
                    <input type="checkbox" id="mat-popular" className="h-4 w-4" checked={value.collection.includes('popularne')} onChange={() => onFilterChange('collection', 'popularne')}/>
                    <label htmlFor="mat-popular">Popularne</label>
                </li>
                <li className="flex itmes-center gap-4">
                    <input type="checkbox" id="mat-new" className="h-4 w-4" checked={value.collection.includes('nowa-kolekcja')} onChange={() => onFilterChange('collection', 'nowa-kolekcja')}/>
                    <label htmlFor="mat-new">Nowa kolekcja</label>
                </li>
            </ul>
        </div>

        <div className="mb-2 py-3">
            <button
                className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-200 border border-black transition">
                Zastosuj filtry
            </button>
        </div>
    </>
  )
}

export default ProductsFilter