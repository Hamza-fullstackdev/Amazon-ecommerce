import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
  column1: { type: String, required: true },
  column2: { type: String, required: true },
  column3: { type: String, required: true },
  column4: { type: String, required: true },
  column5: { type: String, required: true },
});

export default mongoose.models.Data || mongoose.model('data', DataSchema);
