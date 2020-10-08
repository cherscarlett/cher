const HotSauce = ({brand, name, location, img, url, shu, rating}) => (
    <>
        <td>
            {brand}
        </td>
        <td>
            {name}
        </td>
        <td>
            {location || "Pantry"}
        </td>
    </>
);

export default HotSauce;
