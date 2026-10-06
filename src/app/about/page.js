import Image from 'next/image';
import styles from './about.module.css';

const About = () => {
    return (
        <main className={styles.about}>
            <div className={styles.intro}>
                <Image
                    src="/profile.svg"
                    alt="Jeevitha profile picture"
                    width={180}
                    height={180}
                    className={styles.picture}
                />
                <div className={styles.headings}>
                    <h1>Welcome to the about page</h1>
                    <h2>Jeevitha</h2>
                    <h3>Computer Science Student</h3>
                </div>
            </div>

            <p className={styles.bio}>
                Hello! I am Jeevitha, a computer science Engineering student. I am interested in
                web development, programming and learning new technologies.
            </p>

            <section className={styles.education}>
                <h2>Education</h2>
                <p>Bachelor of Engineering in Computer Science</p>
            </section>
        </main>
    );
};

export default About;
