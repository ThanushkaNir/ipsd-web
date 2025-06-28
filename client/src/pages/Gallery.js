import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore moments from our workshops, seminars, and training sessions that showcase the impact of our programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Latest Event: Visiting the KRP Institute of Engineering and Technology */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex flex-col items-center justify-center p-4"
            >
              <div className="grid grid-cols-4 gap-2 w-full mb-3">
                <img src="/assets/kprindi2025/img1.jpg" alt="KPR Institute 1" className="object-cover rounded-lg border border-primary-200 shadow h-20 w-full" />
                <img src="/assets/kprindi2025/img2.jpg" alt="KPR Institute 2" className="object-cover rounded-lg border border-primary-200 shadow h-20 w-full" />
                <img src="/assets/kprindi2025/img3.jpg" alt="KPR Institute 3" className="object-cover rounded-lg border border-primary-200 shadow h-20 w-full" />
                <img src="/assets/kprindi2025/img4.jpg" alt="KPR Institute 4" className="object-cover rounded-lg border border-primary-200 shadow h-20 w-full" />
                <img src="/assets/kprindi2025/img5.jpg" alt="KPR Institute 5" className="object-cover rounded-lg border border-primary-200 shadow h-20 w-full" />
                <img src="/assets/kprindi2025/img6.jpg" alt="KPR Institute 6" className="object-cover rounded-lg border border-primary-200 shadow h-20 w-full" />
                <img src="/assets/kprindi2025/img7.jpg" alt="KPR Institute 7" className="object-cover rounded-lg border border-primary-200 shadow h-20 w-full" />
                <img src="/assets/kprindi2025/img8.jpg" alt="KPR Institute 8" className="object-cover rounded-lg border border-primary-200 shadow h-20 w-full" />
              </div>
              <div className="text-4xl mb-2">📸</div>
              <h3 className="text-lg font-bold text-primary-700 mb-1 text-center">Visiting the KRP Institute of Engineering and Technology</h3>
              <p className="text-xs text-gray-500 mb-2 text-center">Recent</p>
              <p className="text-gray-700 text-xs text-left max-h-40 overflow-y-auto">
                Visiting the KRP Institute of Engineering and Technology, engaging with students and faculty, and exploring innovative educational environments.<br/><br/>
                <span className="font-bold text-primary-600">WIN LIFE</span>
              </p>
            </motion.div>
            {/* Latest Event: Teacher Training Programme at Subodhi Maha Vidyalaya Anuradhapura */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex flex-col items-center justify-center p-4"
            >
              <div className="grid grid-cols-3 gap-2 w-full mb-3">
                <img src="/assets/subpdi teach tr/img1.jpg" alt="Teacher Training 1" className="object-cover rounded-lg border border-primary-200 shadow h-24 w-full" />
                <img src="/assets/subpdi teach tr/img2.jpg" alt="Teacher Training 2" className="object-cover rounded-lg border border-primary-200 shadow h-24 w-full" />
                <img src="/assets/subpdi teach tr/img3.jpg" alt="Teacher Training 3" className="object-cover rounded-lg border border-primary-200 shadow h-24 w-full" />
              </div>
              <div className="text-4xl mb-2">📸</div>
              <h3 className="text-lg font-bold text-primary-700 mb-1 text-center">Teacher Training Programme at Subodhi Maha Vidyalaya Anuradhapura</h3>
              <p className="text-xs text-gray-500 mb-2 text-center">Recent</p>
              <p className="text-gray-700 text-xs text-left max-h-40 overflow-y-auto">
                Teacher training programme conducted at Subodhi Maha Vidyalaya, Anuradhapura, empowering educators with new skills and strategies for effective teaching and student engagement.<br/><br/>
                <span className="font-bold text-primary-600">WIN LIFE</span>
              </p>
            </motion.div>
            {/* Latest Event: Events with local colleges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex flex-col items-center justify-center p-4"
            >
              <div className="grid grid-cols-2 gap-2 w-full mb-3">
                <img src="/assets/college ivent/img1.jpg" alt="Local College Event 1" className="object-cover rounded-lg border border-primary-200 shadow h-32 w-full" />
                <img src="/assets/college ivent/img2.jpg" alt="Local College Event 2" className="object-cover rounded-lg border border-primary-200 shadow h-32 w-full" />
              </div>
              <div className="text-4xl mb-2">📸</div>
              <h3 className="text-lg font-bold text-primary-700 mb-1 text-center">Events with Local Colleges</h3>
              <p className="text-xs text-gray-500 mb-2 text-center">Recent</p>
              <p className="text-gray-700 text-xs text-left max-h-40 overflow-y-auto">
                Events and workshops conducted in collaboration with local colleges, empowering students and educators through skill development and interactive sessions.<br/><br/>
                <span className="font-bold text-primary-600">WIN LIFE</span>
              </p>
            </motion.div>
            {/* 2024 Event: Self-Discovery and Leadership Bootcamp */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex flex-col items-center justify-center p-4"
            >
              <img
                src="/assets/XSoftUs/img1.jpg"
                alt="2024 Self-Discovery and Leadership Bootcamp"
                className="w-full h-40 object-cover rounded-lg mb-3 border border-primary-200 shadow"
              />
              <div className="text-4xl mb-2">📸</div>
              <h3 className="text-lg font-bold text-primary-700 mb-1 text-center">2024 &mdash; Self-Discovery and Leadership Bootcamp</h3>
              <p className="text-xs text-gray-500 mb-2 text-center">Invitation by XSoftUs / XSoftUs_EDU</p>
              <p className="text-gray-700 text-xs text-left max-h-40 overflow-y-auto">
                Focuses on self-introduction, understanding oneself, developing 21st-century skills, and engaging in psychosocial activities for personal and leadership development for our Interns!<br/><br/>
                <b>Invitation!</b> <br/>
                <span className="font-bold text-primary-600">WIN LIFE</span>
              </p>
            </motion.div>
            {/* 2017 Event: IPSD Initiative at Kandakadu Senapura */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex flex-col items-center justify-center p-4"
            >
              <img
                src="/assets/kandakadu/img1.jpg"
                alt="2017 IPSD Initiative at Kandakadu Senapura"
                className="w-full h-40 object-cover rounded-lg mb-3 border border-primary-200 shadow"
              />
              <div className="text-4xl mb-2">📸</div>
              <h3 className="text-lg font-bold text-primary-700 mb-1 text-center">2017 &mdash; IPSD's Initiative at Kandakadu Senapura: Educational Support and Drug Rehabilitation Programs</h3>
              <p className="text-xs text-gray-500 mb-2 text-center">2017 in Kandakadu, Sri Lanka</p>
              <p className="text-gray-700 text-xs text-left max-h-40 overflow-y-auto">
                The Institute of Psychological Skill Development (IPSD) has always been at the forefront of addressing pressing social issues through education and psychological care. In line with this commitment, we launched an important initiative at the Kandakadu Senapura Drug Rehabilitation Department, focusing on providing educational support and enhancing the effectiveness of drug rehabilitation programs.<br/><br/>
                <b>Addressing the Challenge of Drug Rehabilitation</b><br/>
                Drug addiction is a complex issue that affects not only the individual but also their families and communities. At the Kandakadu Senapura Rehabilitation Center, individuals struggling with substance abuse receive treatment aimed at helping them regain control over their lives. However, successful rehabilitation requires more than just medical treatment—it also necessitates psychological support, education, and skills development to ensure lasting recovery.<br/><br/>
                Recognizing this, IPSD designed a program that integrated educational support with rehabilitation efforts. Our goal was to equip individuals with the knowledge and skills they need to rebuild their lives after overcoming addiction.<br/><br/>
                <b>Educational Support Program</b><br/>
                The educational component of our program was tailored to meet the specific needs of those undergoing rehabilitation. We offered a range of educational activities, from basic literacy and numeracy classes to vocational training. These educational sessions were designed not only to provide practical skills but also to boost the confidence and self-esteem of participants, helping them to envision and work towards a brighter future.<br/><br/>
                Education, in this context, served as a powerful tool for personal development and empowerment. By engaging participants in learning activities, we aimed to foster a sense of purpose and direction, which is crucial for successful rehabilitation.<br/><br/>
                <b>Enhancing Rehabilitation Through Psychological Support</b><br/>
                In addition to education, IPSD provided psychological support to enhance the effectiveness of the rehabilitation process. This included counseling sessions, group therapy, and workshops focused on building resilience, managing stress, and developing healthy coping mechanisms. Our psychological support was integral to helping individuals address the underlying issues contributing to their addiction, ensuring a more comprehensive and holistic approach to recovery.<br/><br/>
                <b>A Holistic Approach to Recovery</b><br/>
                The initiative at Kandakadu Senapura was not just about treating addiction; it was about empowering individuals to take control of their lives and make positive changes. By combining educational support with psychological care, IPSD aimed to create a sustainable pathway to recovery, helping individuals to reintegrate into society as productive and confident members.<br/><br/>
                <b>Moving Forward</b><br/>
                The success of our program at Kandakadu Senapura has reinforced IPSD's commitment to addressing the complex issues surrounding drug addiction. We believe that with the right support, education, and care, individuals can overcome addiction and lead fulfilling lives. As we continue our work, we remain dedicated to expanding and enhancing our programs to reach more individuals in need.<br/><br/>
                <span className="font-bold text-primary-600">WIN LIFE</span>
              </p>
            </motion.div>
            {/* 2013 Event: Career Guidance at Victoria College, Malaysia */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex flex-col items-center justify-center p-4"
            >
              <img
                src="/assets/malayasia/img1.jpg"
                alt="2013 Career Guidance Event at Victoria College, Malaysia"
                className="w-full h-40 object-cover rounded-lg mb-3 border border-primary-200 shadow"
              />
              <div className="text-4xl mb-2">📸</div>
              <h3 className="text-lg font-bold text-primary-700 mb-1 text-center">2013 &mdash; Career Guidance Event at Victoria College, Malaysia</h3>
              <p className="text-xs text-gray-500 mb-2 text-center">2013 in Malaysia</p>
              <p className="text-gray-700 text-xs text-left max-h-40 overflow-y-auto">
                We visited Victoria College in Malaysia for a special Career Guidance event, aiming to empower students with the tools and knowledge they need to succeed in their future careers. This event was a significant milestone for us at IPSD, as we continue to strive for excellence in education and student development.<br/><br/>
                A big shout-out to Mr. Anura Kanduluwebandara for being an integral part of this journey.<br/><br/>
                <span className="font-bold text-primary-600">WIN LIFE</span>
              </p>
            </motion.div>
            {/* 2013 Event: Collaboration with STEi Institute, Singapore */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex flex-col items-center justify-center p-4"
            >
              <div className="grid grid-cols-2 gap-2 w-full mb-3">
                <img src="/assets/singapore/img1.jpg" alt="STEi Singapore 1" className="object-cover rounded-lg border border-primary-200 shadow h-20 w-full" />
                <img src="/assets/singapore/img2.jpg" alt="STEi Singapore 2" className="object-cover rounded-lg border border-primary-200 shadow h-20 w-full" />
                <img src="/assets/singapore/img3.jpg" alt="STEi Singapore 3" className="object-cover rounded-lg border border-primary-200 shadow h-20 w-full" />
                <img src="/assets/singapore/img4.jpg" alt="STEi Singapore 4" className="object-cover rounded-lg border border-primary-200 shadow h-20 w-full" />
                <img src="/assets/singapore/img5.jpg" alt="STEi Singapore 5" className="object-cover rounded-lg border border-primary-200 shadow h-20 w-full col-span-2" />
              </div>
              <div className="text-4xl mb-2">📸</div>
              <h3 className="text-lg font-bold text-primary-700 mb-1 text-center">2013 &mdash; Collaboration with STEi Institute, Singapore</h3>
              <p className="text-xs text-gray-500 mb-2 text-center">August 8, 2013 in Singapore</p>
              <p className="text-gray-700 text-xs text-left max-h-40 overflow-y-auto">
                We had the incredible opportunity to collaborate with STEi Institute in Singapore, where more than 60 Sri Lankan students joined us for a 12-day intensive program in Hotel Management. This collaboration paved the way for offering specialized courses tailored for our students back home.<br/><br/>
                We also built strong, lasting relationships with industry experts, enhancing the quality of education and experience we bring to our students. Special thanks to Mr. Anura Kanduluwebandara for his invaluable contribution to this initiative!<br/><br/>
                <span className="font-bold text-primary-600">WIN LIFE</span>
              </p>
            </motion.div>
            {/* 2010 Event: Career Guidance at Rajarata University */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex flex-col items-center justify-center p-4"
            >
              <img
                src="/assets/unirar.jpg"
                alt="2010 Career Guidance Program at Rajarata University"
                className="w-full h-40 object-cover rounded-lg mb-3 border border-primary-200 shadow"
              />
              <div className="text-4xl mb-2">📸</div>
              <h3 className="text-lg font-bold text-primary-700 mb-1 text-center">2010 &mdash; Career Guidance Program at University of Rajarata: Empowering Future Leaders</h3>
              <p className="text-xs text-gray-500 mb-2 text-center">2010 at Rajarata University of Sri Lanka</p>
              <p className="text-gray-700 text-xs text-left max-h-40 overflow-y-auto">
                In 2010, the Institute of Psychological Skill Development (IPSD) had the privilege of conducting a Career Guidance Program for the students of the Management Faculty at the University of Rajarata. This event was a significant milestone in our ongoing efforts to support and empower young minds as they prepare to step into the professional world.<br/><br/>
                <b>Bridging the Gap Between Education and Employment</b><br/>
                The transition from academic life to the professional world can be challenging for many students. Recognizing this, IPSD designed a comprehensive Career Guidance Program tailored to the needs of management students. Our goal was to equip them with the knowledge, skills, and confidence needed to navigate the complexities of the job market and make informed career choices.<br/><br/>
                <b>Program Highlights</b><br/>
                The 2010 Career Guidance Program included a series of interactive sessions that covered various aspects of career planning and development. Topics ranged from resume writing and interview preparation to effective communication and leadership skills. We also provided insights into the latest industry trends and the skills most in demand by employers.<br/><br/>
                Our experienced facilitators engaged the students in practical exercises and discussions, ensuring that they left the program with a clear understanding of how to align their academic achievements with their career aspirations.<br/><br/>
                <b>A Collaborative Effort</b><br/>
                This program was made possible through our close collaboration with the Management Faculty of the University of Rajarata. We worked hand in hand with faculty members to ensure that the program was relevant to the students' needs and aligned with the university's academic goals.<br/><br/>
                <b>Impact and Outcomes</b><br/>
                The feedback from participants was overwhelmingly positive. Students appreciated the practical advice and guidance provided, and many reported feeling more prepared and confident about their future careers. For IPSD, this program reaffirmed our commitment to empowering the next generation of leaders through targeted, high-impact educational initiatives.<br/><br/>
                <b>Looking Ahead</b><br/>
                As we reflect on the success of the 2010 Career Guidance Program, we are motivated to continue our mission of supporting students across Sri Lanka. At IPSD, we believe that career guidance is not just about helping students find jobs—it's about helping them discover their true potential and guiding them towards fulfilling, meaningful careers.<br/><br/>
                <span className="font-bold text-primary-600">WIN LIFE</span>
              </p>
            </motion.div>
            {/* Oldest Event: 2004 Tsunami Response */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex flex-col items-center justify-center p-4"
            >
              <img
                src="/assets/2004tsunami.jpg"
                alt="2004 Tsunami Response - Hambantota, Sri Lanka"
                className="w-full h-40 object-cover rounded-lg mb-3 border border-primary-200 shadow"
              />
              <div className="text-4xl mb-2">📸</div>
              <h3 className="text-lg font-bold text-primary-700 mb-1 text-center">2004 &mdash; IPSD's Humanitarian Response to the 2004 Tsunami</h3>
              <p className="text-xs text-gray-500 mb-2 text-center">Hambantota, Sri Lanka</p>
              <p className="text-gray-700 text-xs text-left max-h-40 overflow-y-auto">
                In 2004, Sri Lanka faced one of the most devastating natural disasters in its history—the Indian Ocean tsunami. Among the hardest-hit areas was Hambantota, where countless lives were disrupted, and entire communities were left grappling with immense loss and trauma. In the aftermath of this tragedy, the Institute of Psychological Skill Development (IPSD) took swift action to provide much-needed psychological support to the affected individuals, including students, teachers, and local residents.<br/><br/>
                <b>Offering Psychological Support in Times of Crisis</b><br/>
                Understanding the profound psychological impact that such a disaster can have, IPSD mobilized a team of trained professionals to visit Hambantota shortly after the tsunami struck. Our mission was clear: to offer compassionate, effective psychological support to those who were struggling to cope with the emotional aftermath of the disaster.<br/><br/>
                <b>Focus on Students, Teachers, and the Community</b><br/>
                Our efforts were concentrated on three key groups: students, teachers, and the broader community. For students, the tsunami had disrupted not only their homes and families but also their education. Many were dealing with feelings of fear, anxiety, and uncertainty about the future. IPSD's team worked closely with these young individuals, providing counseling and emotional support to help them process their experiences and regain a sense of normalcy.<br/><br/>
                Teachers, who were themselves affected by the disaster, also played a crucial role in the recovery process. They needed to be emotionally equipped to support their students while managing their own trauma. IPSD provided specialized training and counseling to help teachers navigate these challenges, ensuring they could be a steady, reassuring presence for their students.<br/><br/>
                For the wider community, IPSD organized group counseling sessions and workshops aimed at fostering resilience and emotional recovery. These sessions helped individuals express their grief, share their experiences, and start rebuilding their lives with a renewed sense of hope and determination.<br/><br/>
                <b>A Lasting Impact</b><br/>
                The 2004 tsunami was a time of unimaginable hardship for many in Sri Lanka. However, it was also a time that highlighted the importance of community, solidarity, and psychological resilience. The work IPSD did in Hambantota not only provided immediate relief but also laid the foundation for ongoing support in the region.<br/><br/>
                Our efforts were deeply appreciated by those we helped, and the bonds we formed during this time continue to inspire our work today. The experience underscored the critical role that psychological support plays in disaster recovery and reinforced our commitment to providing such services whenever and wherever they are needed.<br/><br/>
                <b>Moving Forward</b><br/>
                Reflecting on our response to the 2004 tsunami, we at IPSD are reminded of the power of compassion and the importance of psychological care in healing after a crisis. As we continue our work, we remain dedicated to supporting those in need, whether in times of disaster or through the challenges of everyday life.<br/><br/>
                <span className="font-bold text-primary-600">WIN LIFE</span>
              </p>
            </motion.div>
            {/* 2009 Event: Northern Province Mission */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex flex-col items-center justify-center p-4"
            >
              <img
                src="/assets/2009event.jpg"
                alt="2009 IPSD Mission to Northern Province"
                className="w-full h-40 object-cover rounded-lg mb-3 border border-primary-200 shadow"
              />
              <div className="text-4xl mb-2">📸</div>
              <h3 className="text-lg font-bold text-primary-700 mb-1 text-center">2009 &mdash; IPSD's Mission to the Northern Province: Rebuilding Lives and Education After the War</h3>
              <p className="text-xs text-gray-500 mb-2 text-center">2009 at Vauniyawa Irattaperiyakulam</p>
              <p className="text-gray-700 text-xs text-left max-h-40 overflow-y-auto">
                In 2009, as Sri Lanka emerged from decades of civil conflict, the Northern Province faced the daunting task of rebuilding. The war had left deep scars on the people, infrastructure, and education system of the region. Recognizing the urgent need for support, the Institute of Psychological Skill Development (IPSD) launched a mission to the Northern Province with the goal of improving the lives of the local population and reviving the education of their children.<br/><br/>
                <b>Supporting Post-War Recovery</b><br/>
                The aftermath of the war brought numerous challenges to the Northern Province. Communities were struggling to rebuild their lives amid the ruins of conflict, and the education system had been severely disrupted. IPSD, committed to making a difference, focused on two primary areas: creating temporary schools and training teachers, as well as providing practical support for daily life.<br/><br/>
                <b>Establishing Temporary Schools and Training Teachers</b><br/>
                Education is a cornerstone of recovery and development, especially in post-conflict regions. Understanding this, IPSD worked tirelessly to establish temporary schools in areas where the existing infrastructure had been damaged or destroyed. These schools served as safe spaces where children could continue their education, find stability, and regain a sense of normalcy.<br/><br/>
                In tandem with setting up these schools, IPSD also initiated training programs for teachers. The war had not only depleted resources but had also left teachers in need of support and retraining to meet the new challenges they faced. Our training sessions were designed to equip them with the skills and resilience needed to handle post-war educational needs, ensuring that they could effectively nurture and educate the next generation.<br/><br/>
                <b>Assisting Day-to-Day Life</b><br/>
                Beyond education, the daily lives of people in the Northern Province had been upended by the conflict. Many families were dealing with loss, displacement, and the challenge of rebuilding their lives from scratch. IPSD extended its support by providing essential resources and guidance to help these communities regain their footing.<br/><br/>
                Whether it was through offering psychological counseling, facilitating access to basic necessities, or helping with the reconstruction of homes and community facilities, IPSD was dedicated to making a tangible difference in the day-to-day lives of the people in the Northern Province.<br/><br/>
                <b>A Commitment to Healing and Growth</b><br/>
                The 2009 mission to the Northern Province was a profound demonstration of IPSD's commitment to healing and growth in post-conflict Sri Lanka. By focusing on education and daily life support, we played a part in the broader effort to rebuild the region and restore hope to its people.<br/><br/>
                The work we did in the Northern Province continues to inspire our ongoing initiatives across the country. It reaffirmed our belief that with the right support, communities can recover, rebuild, and thrive, even after the most challenging circumstances.<br/><br/>
                <b>Looking Ahead</b><br/>
                As we look back on our efforts in 2009, we are reminded of the resilience and strength of the Northern Province's people. At IPSD, we remain dedicated to supporting those in need, with a continued focus on education, psychological care, and community development.<br/><br/>
                <span className="font-bold text-primary-600">WIN LIFE</span>
              </p>
            </motion.div>
            {/* Other gallery placeholders */}
            {Array.from({ length: 7 }, (_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="text-gray-600">Event Photo {index + 3}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery; 