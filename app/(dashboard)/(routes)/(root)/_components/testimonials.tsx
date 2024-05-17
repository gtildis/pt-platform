const Testimonials = () => {
  return (
    <div className="mb-12 lg:mb-0">
      <div className="lg:h-[500px] md:h-[650px] h-[800px] w-full z-50">
        <div className="h-[50px] background-gray cropped-right-top -mt-12"></div>
        <div className="lg:h-[400px] md:h-[550px] h-[50px] w-full background-gray">
          <div className="text-center flex justify-center text-2xl">
            <h3 className="border-top border-bottom w-fit mt-4">FEEDBACK</h3>
          </div>
          <div className="text-center relative md:m-24 mt-24 m-6">
            <span className="quotes text-primary absolute left-1 -top-14 text-[100px]">
              &quot;
            </span>
            <p className="text-md md:text-xl lg:2xl pt-4">
              Ο αχιλλεας με βοηθησε μεσα σε λιγους μηνες να πετυχω το στοχο που
              δεν μπορουσα για 2 χρονια. Μεσα σε 3 μηνες εχασα συνολικα 12 κιλα.
              Με βοηθησε να καταλαβω τι κανονες πρεπει να τηρησω για την
              διατροφη μου για να μην στερηθω γευματα. Παρολαυτα το δυνατοτερο
              σημειο του προσωπικου πλανου ηταν το οτι με βοηθησε να χτισω το
              αντιστοιχο μενταλιτι για να μην σταματησω να γυμναζομαι.
            </p>
            <span className="quotes absolute text-primary right-14  text-[100px]">
              &quot;
            </span>
            <span className="">Γρηγόρης Τ.</span>
          </div>
        </div>
        <div className="h-[50px] background-gray cropped-right-bottom"></div>
      </div>
    </div>
  );
};

export default Testimonials;
