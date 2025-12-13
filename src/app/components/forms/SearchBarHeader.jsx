"use client"

export function SearchBarHeader({ onUpdate,closeSearchBarMenu }) {

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const inputEl = form.elements['searchBar-header'];
        onUpdate(inputEl.value);
        form.reset();
        closeSearchBarMenu();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="searchBar-header" placeholder="Que recherchez-vous ?" />
                <button type="submit" className="headerSearchBar-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </>
    );
}