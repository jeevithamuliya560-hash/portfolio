import styles from './contact.module.css';

const Contact = () => {
    return (
        <main className={styles.contact}>
            <section className={styles.content}>
            <h1>welcome to the contact page</h1>
            <h2>Contact Information</h2>
            <p>I would love to hear from you. Feel free to contact me.</p>
            <div className={styles.details}>
                <div>
                    <h3>Email</h3>
                    <p>jeevitha@example.com</p>
                </div>
                <div>
                    <h3>Phone</h3>
                    <p>+91 XXXXXXXXXX</p>
                </div>
                <div>
                    <h3>Location</h3>
                    <p>Mangalore, Karnataka, India</p>
                </div>
                <div>
                    <h3>GitHub</h3>
                    <p>github.com/jeevitha</p>
                </div>
            </div>
            </section>
        </main>
    )
}

export default Contact;
