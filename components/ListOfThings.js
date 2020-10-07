import styles from './ListOfThings.module.css';

const ListOfThings = ({things}) => (
    <div className={styles.container}>
        {things.map((thing, index) => (
            <div key={index}>
                <h3>{thing.name}</h3>
                <ul>
                    {thing.items && thing.items.map((item, index) => (
                        <li key={index}>
                            <a href={item.url}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);

export default ListOfThings;