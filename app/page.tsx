import Link from "next/link";
/*The iframe code comes from the video on the Harvard Art Museums'
website and the description of the Harvard Art Museums is my own writing
based on what I learned from their website*/

export default function Home() {

    return (
        <div className="flex flex-col items-center bg-white !m-10">
            <h1 className="text-center text-3xl font-extrabold">About the Harvard Art Museums</h1>
            <h2 className="text-center text-2xl font-bold !my-4 underline"><Link href="https://harvardartmuseums.org/" >Learn more from the Harvard Art Museums' Website</Link></h2>
            <p className="w-3/4 text-[18px] bg-pink-950 text-white border-black border-9 p-3 !mx-10">The Harvard Art
                Museums is comprised of the Fogg Museum, the Busch-Reisinger Museum, and the Arthur M.
                Sackler Museum. Each museum features different displays and each has a unique history. All of the museums are
                free to all and has over 50 galleries of paintings, sculptures, furniture, and much much more. In
                addition to the galleries, it also has a cafe and a gift shop. Additionally, the museum hosts events for
                the public to come and participate in a variety of programs. One of their featured events is "Harvard
                Art Museums at Night" wherein they stay open to the public until 9pm and welcome patrons to come enjoy
                snacks, art, and more. If you're interested in seeing a small preview of some of the pieces the Harvard
                Art Museums displays, click on the <span className="font-bold text-yellow-300">Artworks</span> tab in
                the navigation bar at the top of this page.</p>
            <div className="flex flex-row text-center">
                <div className="flex flex-col text-[20px] bg-black text-white !m-10 p-10">
                    <p className="py-10">Location: 32 Quincy Street Cambridge, MA 02138</p>
                    <p className="font-bold">Hours of Operation: </p>
                    <ul>
                        <li>Monday: Closed</li>
                        <li>Tuesday: 10am - 5pm</li>
                        <li>Wednesday: 10am - 5pm</li>
                        <li>Thursday: 10am - 5pm</li>
                        <li>Friday: 10am - 5pm</li>
                        <li>Saturday: 10am - 5pm</li>
                        <li>Sunday: 10am - 5pm</li>
                    </ul>
                    <p className="py-10">Admission: Free to all visitors.</p>
                </div>
                <div className="flex flex-col !m-10 text-[20px] border-black border-10 p-5">
                    <h1>From the Harvard Art Museums' <Link href="https://harvardartmuseums.org/"
                                                            className="text-blue-800 underline">Website</Link>:</h1>

                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/956686182?h=44514bd835" width="640"
                            height="360" frameBorder="0" referrerPolicy="strict-origin-when-cross-origin"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                            allowFullScreen className="pt-10">
                    </iframe>
                </div>
            </div>
        </div>
    );
}
