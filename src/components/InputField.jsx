export const InputField = ({ label, name, onChange, placeholder, error, required, value, type }) => {
    return (
        <div className="space-y-2">
            <label>
                {label}
                {required && <span className="text-red-700">*</span>}
            </label>
            <br />
            <input type={type} onChange={onChange} name={name} placeholder={placeholder} value={value} className={`border px-4 py-2 ${error && 'border-red-400'}`} />

            {error && <p className="text-red-600">{error}</p>}
        </div>
    )
}
